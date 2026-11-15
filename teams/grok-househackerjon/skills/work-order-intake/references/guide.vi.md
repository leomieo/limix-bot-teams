# Tiếp nhận và chuẩn bị lịch công việc

Tên kỹ thuật: `work-order-intake`.

Gom yêu cầu công việc từ các kênh vào một hàng đợi, đối chiếu năng lực đội thợ và chuẩn bị lịch chờ duyệt.

## Ví dụ yêu cầu

> Tổng hợp yêu cầu sửa chữa mới, đề xuất lịch theo giờ làm đã ghi và để mọi đặt lịch chờ tôi duyệt.

## Đầu vào và giới hạn

Cần chỉ định chính xác tài khoản/kênh, danh sách nhân sự và giờ làm bằng văn bản, cùng định nghĩa tình huống khẩn cấp. Ghi nguyên văn yêu cầu; báo ngay việc có dấu hiệu khẩn cấp thay vì tự xếp lịch. Chỉ đọc dữ liệu; không nhận việc, trả lời, đặt/xác nhận lịch, chỉnh sửa hay lưu trữ gì. Mỗi đề xuất phải chờ phê duyệt của người dùng.

## Cách nạp

Lõi tiếng Anh được chuyển nguyên văn từ trường `instructions` của playbook upstream, vì nguồn không có tệp `SKILL.md` riêng. Khi kích hoạt, đọc [lõi tiếng Anh](../SKILL.md). Hướng dẫn này là lớp trợ giúp riêng; không nạp lặp lại toàn bộ quy trình. Metadata không cấp quyền công cụ hoặc chứng nhận an toàn.
