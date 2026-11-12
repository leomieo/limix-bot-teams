---
name: mechanism-extraction
description: Bóc tách cơ chế kỹ thuật thực tế và quy trình làm việc từ các tuyên bố kiếm tiền bằng AI, loại bỏ chiêu trò phễu bán hàng.
---

# Bóc tách cơ chế hoạt động (Mechanism Extraction)

## Khi nào sử dụng
Sau khi đã có bài đăng gốc được truy vết, dùng kỹ năng này để phân tích xem quy trình có thể tái lập được không hay chỉ là chiêu trò tạo phễu thu hút (funnel).

## Quy trình thực hiện
1. **Trả lời 3 câu hỏi cốt lõi:**
   - *Kết nối:* Agent hoặc công cụ AI được kết nối với những hệ thống nào (APIs, web scraper, email, bảng tính)?
   - *Tác vụ thường trực:* Agent được giao nhiệm vụ cụ thể gì lặp đi lặp lại?
   - *Dòng giá trị:* Tiền bạc hoặc giá trị tiết kiệm sức lao động thực tế phát sinh ở khâu nào?
2. **Phát hiện và loại bỏ phễu bán hàng (Disqualification):**
   - Chiêu trò yêu cầu "Follow + RT để nhận prompt/bot".
   - Kêu gọi thả địa chỉ ví nhận token.
   - Dẫn vào nhóm kín trả phí (Telegram, Discord, Skool) để xem chi tiết.
   - Các đường link affiliate hoặc bán khóa học/công cụ.
   *Nếu cơ chế thực tế duy nhất là phễu bán hàng, đánh dấu loại bỏ ngay lập tức.*
3. **Mô tả quy trình khả thi:**
   - Soạn một đoạn văn mô tả súc tích quy trình từng bước có thể tự làm lại được.
   - Xác định ranh giới an toàn cần thiết: Phải có con người phê duyệt trước khi gửi tin nhắn hoặc chi tiêu; không cấp quyền truy cập tài chính tự động.
   - Quy kết mọi con số là "tuyên bố của tác giả", giữ mức kỳ vọng ở cận dưới.
4. **Đưa ra khuyến nghị cuối cùng:**
   - *Đáng thử nghiệm có giám sát (Worth a supervised trial)*
   - *Theo dõi thêm (Watch)*
   - *Bỏ qua (Ignore)*

## Đầu ra
Đoạn phân tích cơ chế rõ ràng kèm ranh giới an toàn, đánh giá độ tin cậy và khuyến nghị hành động cụ thể.

## Ranh giới an toàn
- Không bao giờ nhắc lại số liệu doanh thu của tác giả như một sự thật hiển nhiên.
- Không suy đoán thêm những tính năng hoặc cơ chế kỹ thuật mà bài gốc không đề cập.
