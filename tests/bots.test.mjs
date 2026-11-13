import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const read = path => JSON.parse(readFileSync(new URL(path, root), 'utf8'));
const catalog = read('catalog.json');
test('bot templates keep Vietnamese descriptions and English execution fields', () => {
  const bots = catalog.bots.map(row => read(row.file || 'bots/' + row.id + '.json'));
  const members = catalog.teams.flatMap(row => read(row.manifest).team.members);
  for (const bot of [...bots, ...members]) {
    assert.match(bot.description, /[\u1ea0-\u1ef9]/u);
    assert.ok(bot.soul?.trim());
    assert.doesNotMatch(bot.soul, /[\u1ea0-\u1ef9]/u);
    for (const routine of bot.routines || []) assert.doesNotMatch(routine.prompt, /[\u1ea0-\u1ef9]/u);
  }
});
