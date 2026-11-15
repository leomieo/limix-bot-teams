# Kiểm tra mẫu Grok HouseHackerJon

Ngày kiểm tra: 16/11/2026, Windows, Node v26.13.1.

## Phạm vi

Thêm mẫu `grok-househackerjon` từ BotMRR, đối chiếu gói upstream tại commit `c45cc3c4c88db8bfc125a691553d448141d735f9`. Mẫu gồm Desk, Catch, Slate, Reach; hai quy trình `work-order-intake` và `lead-follow-up`.

Upstream không có thư mục team hay tệp `SKILL.md` riêng cho mẫu. Hai lõi tiếng Anh được dựng với frontmatter chuẩn từ `name`, `summary` và nguyên văn `instructions` của các playbook trong gói upstream. `skills.sources.json` đánh dấu `package-playbook`, lưu hash playbook nguồn và hash lõi đã tạo. Bản dịch hướng dẫn tiếng Việt ở `references/guide.vi.md`; mỗi skill đi kèm MIT LICENSE và metadata Hybrid. Chỉ dẫn vai trò gốc giữ trong `soul`; bổ sung mô tả, hướng dẫn và trigger tiếng Việt.

Giữ nguyên ranh giới chỉ đọc khi tiếp nhận, yêu cầu thông tin bắt buộc trước khi soạn phản hồi, và phê duyệt riêng trước mọi hành động gửi/đặt lịch. Tuyên bố tiết kiệm `$2,000` vẫn được ghi là tuyên bố chưa xác minh. Mẫu không bật lịch và không tự tạo kết nối ứng dụng.

## Kiểm tra

Lệnh: `node --test repo/tests/*.test.mjs`, với `LIMIX_BOT_SOURCE` trỏ đến source ứng dụng và `HYBRID_UPSTREAM_CHECKOUT` trỏ đến checkout upstream.

- **8 bài đạt, 0 lỗi, 0 bỏ qua.**
- Parser ứng dụng chấp nhận catalog, gói Markdown, manifest nhóm, lõi skill và metadata Hybrid.
- Hash lõi khớp nội dung playbook nguồn đã khóa; thuật toán tìm kiếm tìm được các skill bằng tên kỹ thuật và alias tiếng Việt.
- Bài hồi quy xác nhận chỉ dẫn Desk/Catch/Slate/Reach, trigger gốc, playbook instructions, nguồn tuyên bố và các chốt phê duyệt không bị thay đổi.
- `git diff --check` đạt.

## Giới hạn

Chưa cài mẫu qua giao diện, kết nối Gmail/Slack/ServiceTitan/Quo/cổng khách hàng hoặc chạy tác vụ thực. Chưa kiểm thử hiệu quả bằng model, benchmark token/latency hay xác minh tuyên bố tiết kiệm. Metadata vẫn `unreviewed`/`unchecked`; hash và parser không chứng nhận an toàn. Runtime chưa được sửa để nạp sidecar Hybrid hoặc tự đồng bộ GitHub.
