# Kết quả kiểm tra Hybrid mẫu đội bot

Ngày kiểm tra: 13/11/2026, trên Windows, Node v26.13.1.

## Phạm vi thay đổi

Chuyển 5 skills thuộc `engineering` và `grok-minchoi` về tên kỹ thuật tiếng Anh; bổ sung metadata và hướng dẫn tiếng Việt riêng. Đồng bộ đường dẫn catalog, khóa playbook và tài liệu. Không thay đổi 16 mẫu bot đơn lẻ, dữ liệu đã cài hoặc source ứng dụng Limix Bot.

Nguồn upstream: commit `c45cc3c4c88db8bfc125a691553d448141d735f9` của `milind-soni/openmausbot-teams`. Từng skill có giấy phép MIT đi kèm. Các bản tiếng Việt cũ có trong commit `124c1ff`; bản sao ZIP cũng được giữ ngoài kho trước khi chuyển đổi.

## Kết quả

| Kiểm tra | Kết quả |
| --- | --- |
| Bộ kiểm tra kho mẫu, bật đối chiếu upstream và parser Limix | 5 passed, 0 failed, 0 skipped |
| Byte của 3 `SKILL.md` engineering | Khớp nguồn cố định |
| Hướng dẫn của 2 skills grok-minchoi | Khớp nguyên văn playbook upstream |
| Hai gói BotMRR, YAML, catalog và 5 manifests Hybrid | Parser/schema source hiện tại chấp nhận |
| Tìm kiếm bằng tên tiếng Anh và alias tiếng Việt | 10/10 truy vấn chọn đúng skill đầu tiên |
| Kiểm tra ứng dụng liên quan: skill-fit, hybrid-skill, team-library, skill-folder | 4 files passed; 55 passed, 2 skipped, 0 failed |
| `git diff --check` | Không có lỗi |

Lần chạy đầu phát hiện YAML không hợp lệ trong mô tả Assayer của gói `grok-minchoi` (dấu `: ` chưa được quote). Đã quote chuỗi mà không đổi nội dung, chạy lại toàn bộ bộ kiểm tra kho mẫu và đạt 5/5.

Lệnh `pnpm` không có trong PATH ở môi trường kiểm tra. Bộ kiểm tra ứng dụng được chạy thành công bằng `node node_modules/vitest/vitest.mjs run shared/skill-fit.test.ts shared/hybrid-skill.test.ts server/team-library.test.ts server/skill-folder.test.ts` tại source ứng dụng. Không cài thêm dependency.

## Chưa xác minh

Không có benchmark model trước/sau, số liệu token, latency hoặc tỷ lệ hoàn thành tác vụ. Kiểm tra retrieval là thuật toán trong source hiện tại, không phải một lần gọi Agent/model thực. Chưa kiểm tra cài nhóm qua UI, truyền metadata Hybrid xuyên luồng import, ứng dụng đóng gói, lịch đồng bộ GitHub, phê duyệt/kích hoạt hoặc rollback trong runtime.

Source ứng dụng đang có thay đổi Hybrid chưa commit từ công việc khác. Các bài kiểm tra trên phản ánh trạng thái source tại thời điểm chạy, không chứng minh bản ứng dụng đang chạy đã chứa chức năng đó. Trạng thái metadata vẫn là `unreviewed`/`unchecked`; kiểm tra hash và parser không chứng nhận độ an toàn của skill.
