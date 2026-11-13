# Skills đi kèm mẫu đội bot

## Quy ước

- `SKILL.md`: entrypoint và hướng dẫn thực thi tiếng Anh; giữ nguyên tên kỹ thuật và nội dung gốc nếu upstream có sẵn tệp.
- `manifest.json`: metadata riêng, mô tả tiếng Việt, aliases, keywords, nguồn, commit và hash của lõi. Không thêm trường YAML vào skill gốc.
- `references/guide.vi.md`: giới thiệu, ví dụ và giới hạn bằng tiếng Việt; chỉ đọc khi cần trợ giúp.
- `LICENSE`: giấy phép upstream đi cùng mỗi skill khi sao chép riêng thư mục.
- `skills.sources.json`: khóa nguồn để đối chiếu; phân biệt `verbatim` với `package-playbook`.

Ba skills của `engineering` được sao chép nguyên byte từ upstream. Upstream không có thư mục skill của `grok-minchoi`: hai entrypoint được tạo từ `summary`, `name` và nguyên văn `instructions` của playbook trong `packages/grok-minchoi.md`. Không coi hai tệp này là bản sao của một `SKILL.md` upstream.

Gói BotMRR vẫn giữ tên hiển thị, mô tả và triggers tiếng Việt; `key` và `instructions` trở về tiếng Anh. Mỗi playbook chỉ có một bộ hướng dẫn thực thi. Phần hướng dẫn người dùng không nhân đôi quy trình kỹ thuật đã dịch.

## Nạp nội dung

1. Tìm kiếm bằng metadata gọn: tên, mô tả, aliases và keywords. Tên thư mục và `name` luôn dùng tên tiếng Anh.
2. Khi chọn skill, đọc `SKILL.md` của skill đó.
3. Đọc tài liệu tham khảo khi tác vụ thực sự cần. Không mặc định tải `guide.vi.md` cùng lõi.
4. Công cụ và scripts vẫn phải qua kiểm tra quyền của ứng dụng.

Đây là hợp đồng dữ liệu của kho mẫu, không phải một bộ thực thi hoặc cơ chế phân quyền mới. `permissions: []` nghĩa là skill tài liệu không tự yêu cầu quyền thực thi; không chứng nhận rằng mọi tác vụ người dùng có thể giao đều không cần quyền.

## Tin cậy và cập nhật

Trạng thái ban đầu là `unreviewed` và `unchecked`; các nhãn trong tệp bên ngoài không thể tự phê duyệt skill. Không tự chạy code tải từ GitHub. Hash kiểm tra tính toàn vẹn, không bảo đảm an toàn. Hiện năm skills chỉ có tài liệu, không có scripts hay dependencies.

Khi cập nhật, khóa commit mới, đối chiếu nguồn và giấy phép, giữ English Core, kiểm tra thay đổi quyền/scripts, rồi mới tạo lại lớp tiếng Việt có `sourceSha256` tương ứng. Commit trước migration là `124c1ff`; có thể lấy lại từng tệp từ commit đó. Không đổi dữ liệu skills đã cài trong máy người dùng bằng migration của kho mẫu.

## Giới hạn tích hợp đã khảo sát

Source ứng dụng tại `F:\Tool tu build\Limix Bot\limix-bot` có loader/parser, thư viện, cơ chế fetch GitHub, kiểm tra thư mục, phê duyệt và kiểm tra toàn vẹn sẵn có. Các tệp Hybrid tại đó đang có thay đổi chưa commit từ công việc khác; lần này không sửa chúng.

`server/team-library.ts` hiện tải `package` hoặc manifest nhóm khi cài mẫu. Nó chưa tự tải các sidecar `manifest.json` và `guide.vi.md` từ danh sách `catalog.skills`. Vì vậy gói vẫn dùng bilingual playbook triggers cho đường cài hiện tại; metadata Hybrid được chuẩn bị để tích hợp, chưa được chứng minh đi hết đường cài đặt nhóm.

Chưa triển khai trong kho mẫu: lịch quét GitHub, adapter nhập sidecar vào registry, kích hoạt an toàn, sandbox mới, UI mới và rollback phiên bản skill trong runtime. Không có benchmark cùng model trước/sau; không tuyên bố giảm token, tăng tốc hoặc tăng tỷ lệ thành công.

## Kiểm tra

```powershell
node --test tests/hybrid.test.mjs
```

Để kiểm tra thêm bằng parser, schema và thuật toán tìm kiếm của ứng dụng hiện tại, đồng thời đối chiếu byte từ bản checkout upstream đúng commit:

```powershell
$env:LIMIX_BOT_SOURCE = 'F:\Tool tu build\Limix Bot\limix-bot'
$env:HYBRID_UPSTREAM_CHECKOUT = '<checkout openmausbot-teams>'
node --test tests/hybrid.test.mjs
```

Các kiểm tra này không gọi model, không chạy scripts bên ngoài và không thay đổi dữ liệu ứng dụng đang dùng.
