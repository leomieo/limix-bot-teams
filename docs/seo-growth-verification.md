# Kiểm tra mẫu SEO Growth

Ngày kiểm tra: 15/11/2026, Windows, Node v26.13.1.

## Phạm vi

Thêm mẫu `seo-growth` từ BotMRR và upstream `milind-soni/openmausbot-teams`, commit `c45cc3c4c88db8bfc125a691553d448141d735f9`. Mẫu gồm Nova, Scout, Atlas, Quill và ba skill: `keyword-opportunity-map`, `technical-seo-triage`, `content-brief`.

Mô tả, hướng dẫn và ví dụ hỗ trợ tiếng Việt. Giữ nguyên từng byte ba `SKILL.md` tiếng Anh, kèm MIT LICENSE, hash nguồn, metadata song ngữ và `references/guide.vi.md`. Chỉ dẫn vai trò chuyển nguyên văn vào `soul`; khóa, playbook instructions, trigger tiếng Anh, quy tắc phòng và cấu hình lịch được giữ nguyên. Thêm trigger tiếng Việt bên cạnh trigger gốc.

Lịch tổng kết lúc 09:00 thứ Hai giữ `enabledAfterInstall: false`. Không bật lịch hoặc cài bot trong tài khoản người dùng. Múi giờ do ứng dụng/người dùng cấu hình khi bật lịch. Google Sheets là kết nối tùy chọn.

## Kết quả

Lệnh kiểm tra: `node --test repo/tests/*.test.mjs` từ thư mục làm việc, với `LIMIX_BOT_SOURCE` trỏ tới source Limix Bot và `HYBRID_UPSTREAM_CHECKOUT` trỏ tới checkout nguồn đã kiểm tra.

- **7 bài đạt, 0 lỗi, 0 bỏ qua.**
- Kiểm tra toàn bộ 8 skill trong kho: đường dẫn catalog, định danh, hash, giấy phép và manifest.
- Ba lõi SEO khớp nguồn đã khóa từng byte; các lõi cũ không thay đổi.
- Parser thực tế chấp nhận cả ba gói mẫu, catalog, các entrypoint và metadata Hybrid.
- Thuật toán tìm kiếm của source ứng dụng chọn đúng cả 8 skill với 16 truy vấn tên tiếng Anh/alias tiếng Việt.
- Kiểm tra riêng SEO xác nhận bảo toàn chỉ dẫn vai trò, playbook instructions, trigger gốc, quy tắc phòng, lịch và trạng thái tạm dừng.

Lần đầu parser phát hiện thiếu tiêu đề `Activation` do Việt hóa tên mục. Đã giữ lại các tiêu đề chuẩn parser yêu cầu và kiểm tra lại thành công; phần nội dung hướng dẫn vẫn bằng tiếng Việt.

## Giới hạn

Không sửa source ứng dụng, không chạy dịch vụ SEO hoặc truy cập dữ liệu website, không kiểm thử cài đặt qua giao diện hay model thực. Chưa đo token, latency hoặc tỷ lệ hoàn thành công việc. Kết quả tìm kiếm là kiểm tra thuật toán trong source, không chứng minh bản ứng dụng đang chạy đã nạp metadata Hybrid của mẫu.

Các skill tiếp tục mang trạng thái `unreviewed` và `unchecked`; hash và kiểm tra parser không phải chứng nhận an toàn. Quyền rỗng không có nghĩa skill được cấp quyền tự động. Tự đồng bộ GitHub, phê duyệt, kích hoạt, cách ly thực thi và rollback trong runtime không được triển khai trong thay đổi kho mẫu này.
