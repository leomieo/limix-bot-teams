# Soạn tin nhắn chăm sóc khách hàng

Tên kỹ thuật: `lead-follow-up`.

Soạn phản hồi cho khách hàng tiềm năng và khách hiện tại dựa trên hội thoại thật, bảng giá và cam kết đã được cung cấp.

## Ví dụ yêu cầu

> Soạn thư trả lời khách hàng dựa trên hội thoại, bảng giá và quy tắc báo giá tôi đã cung cấp; không gửi.

## Đầu vào và giới hạn

Chỉ soạn sau khi có bảng giá hoặc quy tắc báo giá, khu vực phục vụ và giọng văn mong muốn. Không bịa giảm giá, tính khẩn cấp, đánh giá, chứng chỉ, kết quả hoặc giá. Không chẩn đoán hệ thống ống nước hay đánh giá an toàn như sự thật; chuyển nội dung có vẻ nguy hiểm cho người phụ trách. Không gửi, đăng hoặc xuất bản; từng bản nháp phải chờ duyệt riêng.

## Cách nạp

Lõi tiếng Anh được chuyển nguyên văn từ trường `instructions` của playbook upstream, vì nguồn không có tệp `SKILL.md` riêng. Khi kích hoạt, đọc [lõi tiếng Anh](../SKILL.md). Hướng dẫn này là lớp trợ giúp riêng; không nạp lặp lại toàn bộ quy trình. Metadata không cấp quyền công cụ hoặc chứng nhận an toàn.
