import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const read = (path) => readFileSync(join(root, path), 'utf8');
const hash = (value) => createHash('sha256').update(value).digest('hex');
const lock = JSON.parse(read('skills.sources.json'));
const catalog = JSON.parse(read('catalog.json'));
const entries = lock.skills.map((entry) => {
  const path = `teams/${entry.team}/skills/${entry.name}`;
  return { ...entry, path, core: read(`${path}/SKILL.md`), manifest: JSON.parse(read(`${path}/manifest.json`)) };
});

test('catalog paths resolve and each team has one canonical skill directory per entry', () => {
  assert.equal(entries.length, 10);
  for (const team of catalog.teams) {
    const expected = entries.filter((entry) => entry.team === team.slug);
    assert.deepEqual(team.skills.sort(), expected.map((entry) => `${entry.path}/SKILL.md`).sort());
    assert.deepEqual(readdirSync(join(root, 'teams', team.slug, 'skills')).sort(), expected.map((entry) => entry.name).sort());
  }
});

test('English entrypoints and Vietnamese metadata agree on identity and content revision', () => {
  for (const { name, core, coreSha256, manifest, path } of entries) {
    assert.match(core, new RegExp(`^---\r?\nname: ${name}\r?\ndescription: [^\r\n]+\r?\n---`));
    assert.equal(manifest.name, name);
    assert.equal(hash(core), coreSha256);
    assert.equal(manifest.source.sha256, coreSha256);
    assert.equal(manifest.vietnamese.sourceSha256, coreSha256);
    assert.equal(manifest.source.commit, lock.commit);
    assert.deepEqual(manifest.languages, ['en', 'vi']);
    assert.equal(manifest.security.status, 'unreviewed');
    assert.equal(manifest.compatibility.status, 'unchecked');
    assert.deepEqual(manifest.permissions, []);
    assert.ok(manifest.vietnamese.aliases.length);
    assert.ok(manifest.vietnamese.keywords.length);
    assert.ok(read(`${path}/${manifest.vietnamese.guide}`).includes(name));
    assert.ok(read(`${path}/LICENSE`).includes('Copyright (c) 2026 Milind Soni'));
    assert.ok(!/[\u1ea0-\u1ef9]/u.test(core), 'Vietnamese must not replace the English execution core');
  }
});

const upstream = process.env.HYBRID_UPSTREAM_CHECKOUT;
test('pinned upstream files and extracted playbook instructions are preserved', { skip: !upstream }, () => {
  for (const entry of entries) {
    const bytes = execFileSync('git', ['-C', upstream, 'show', `${lock.commit}:${entry.sourcePath}`]);
    assert.equal(hash(bytes), entry.sourceSha256);
    if (entry.mode === 'verbatim') assert.equal(entry.core, bytes.toString('utf8'));
    else {
      const source = bytes.toString('utf8').split(`  - key: ${entry.name}\n`)[1];
      const instruction = source.match(/^    instructions: (.*)$/m)[1];
      assert.ok(entry.core.endsWith(`${instruction}\n`));
    }
  }
});

const app = process.env.LIMIX_BOT_SOURCE;
test('SEO template preserves roles, room rules, routine approval and English playbook behavior', { skip: !app || !upstream }, async () => {
  const require = createRequire(join(app, 'package.json'));
  const { parse } = require('yaml');
  const metadata = (text) => parse(text.split(/^---\r?$/m)[1]);
  const original = metadata(execFileSync('git', ['-C', upstream, 'show', `${lock.commit}:packages/seo-growth.md`], { encoding: 'utf8' }));
  const localized = metadata(read('packages/seo-growth.md'));
  const team = JSON.parse(read('teams/seo-growth/seo-growth.mausteam.json')).team;
  assert.equal(localized.chiefOfStaff, original.chiefOfStaff);
  assert.deepEqual(localized.rooms, original.rooms);
  assert.deepEqual(localized.routines, original.routines);
  assert.equal(localized.routines[0].enabledAfterInstall, false);
  for (const agent of original.agents) {
    const localizedAgent = localized.agents.find((entry) => entry.key === agent.key);
    const member = team.members.find((entry) => entry.key === agent.key);
    assert.equal(localizedAgent.soul, agent.description);
    assert.equal(member.soul, agent.description);
    assert.deepEqual(localizedAgent.playbooks, agent.playbooks);
    assert.deepEqual(member.appearance, agent.appearance);
  }
  for (const playbook of original.playbooks) {
    const localizedPlaybook = localized.playbooks.find((entry) => entry.key === playbook.key);
    assert.equal(localizedPlaybook.instructions, playbook.instructions);
    for (const trigger of playbook.triggers) assert.ok(localizedPlaybook.triggers.includes(trigger));
  }
});
test('Grok HouseHackerJon keeps its approval gates, roles, English playbooks and evidence caveats', { skip: !app || !upstream }, async () => {
  const require = createRequire(join(app, 'package.json'));
  const { parse } = require('yaml');
  const metadata = (text) => parse(text.split(/^---\r?$/m)[1]);
  const original = metadata(execFileSync('git', ['-C', upstream, 'show', `${lock.commit}:packages/grok-househackerjon.md`], { encoding: 'utf8' }));
  const localized = metadata(read('packages/grok-househackerjon.md'));
  const team = JSON.parse(read('teams/grok-househackerjon/grok-househackerjon.mausteam.json')).team;
  assert.equal(localized.chiefOfStaff, original.chiefOfStaff);
  assert.equal(localized.proof.amount, original.proof.amount);
  assert.equal(localized.proof.source.url, original.proof.source.url);
  for (const agent of original.agents) {
    const localizedAgent = localized.agents.find((entry) => entry.key === agent.key);
    const member = team.members.find((entry) => entry.key === agent.key);
    assert.equal(localizedAgent.soul, agent.description);
    assert.equal(member.soul, agent.description);
    assert.deepEqual(localizedAgent.playbooks, agent.playbooks);
  }
  for (const playbook of original.playbooks) {
    const localizedPlaybook = localized.playbooks.find((entry) => entry.key === playbook.key);
    assert.equal(localizedPlaybook.instructions, playbook.instructions);
    for (const trigger of playbook.triggers) assert.ok(localizedPlaybook.triggers.includes(trigger));
  }
  assert.match(localized.playbooks[0].instructions, /Take no channel actions of any kind/);
  assert.match(localized.playbooks[1].instructions, /explicit approval of that specific message/);
});
test('Limix parsers accept every core, sidecar, catalog and BotMRR package', { skip: !app }, async () => {
  const load = (path) => import(pathToFileURL(join(app, path)).href);
  const { parseSkillMd } = await load('shared/skill-md.ts');
  const { hybridSkillManifestSchema } = await load('shared/hybrid-skill.ts');
  const { parseBotPackage } = await load('server/bot-package.ts');
  const { parseTeamCatalog } = await load('server/team-library.ts');
  const require = createRequire(join(app, 'package.json'));
  const { parse } = require('yaml');
  assert.ok(parseTeamCatalog(catalog));
  for (const entry of entries) {
    assert.equal(parseSkillMd(entry.core).name, entry.name);
    assert.equal(parse(entry.core.split(/^---\r?$/m)[1]).name, entry.name);
    assert.ok(hybridSkillManifestSchema.safeParse(entry.manifest).success);
    const bad = structuredClone(entry.manifest);
    bad.vietnamese.sourceSha256 = '0'.repeat(64);
    assert.equal(hybridSkillManifestSchema.safeParse(bad).success, false);
  }
  for (const team of catalog.teams) {
    const pkg = parseBotPackage(read(team.package));
    const source = upstream ? parseBotPackage(execFileSync('git', ['-C', upstream, 'show', `${lock.commit}:packages/${team.slug}.md`], { encoding: 'utf8' })) : null;
    for (const playbook of pkg.package.playbooks) {
      assert.ok(entries.some((entry) => entry.name === playbook.key));
      assert.ok(playbook.triggers.some((trigger) => /[\u1ea0-\u1ef9]/u.test(trigger)));
      if (source) assert.equal(playbook.instructions, source.package.playbooks.find((value) => value.key === playbook.key).instructions);
    }
  }
});

test('Limix retrieval finds all registered skills by Vietnamese and English without loading references', { skip: !app }, async () => {
  const { rankSkills } = await import(pathToFileURL(join(app, 'shared/skill-fit.ts')).href);
  const skills = entries.map(({ name, core, manifest }) => ({ name, description: core.match(/^description: (.*)$/m)[1], descriptionVi: manifest.vietnamese.description, aliases: manifest.vietnamese.aliases, keywords: manifest.vietnamese.keywords }));
  for (const { name, manifest } of entries) {
    for (const query of [name.replaceAll('-', ' '), manifest.vietnamese.aliases[0]]) {
      assert.equal(rankSkills(skills, query)[0]?.name, name, query);
    }
  }
});
