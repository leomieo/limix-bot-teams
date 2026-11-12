---
name: claim-tracing
description: Truy vết các ví dụ kiếm tiền từ AI trong bài tổng hợp về bài đăng gốc kèm URL, ngày tháng, trích dẫn nguyên văn và bằng chứng thực tế.
---

# Truy vết nguồn gốc ban đầu (Claim Tracing)

## Khi nào sử dụng
Khi người dùng cung cấp một chuỗi bài tổng hợp trên X, bài viết liệt kê hoặc tuyên bố viral về việc kiếm tiền hay tự động hóa bằng AI và cần kiểm chứng tính xác thực.

## Quy trình thực hiện
1. **Liệt kê ví dụ:** Phân tách từng trường hợp cụ thể được hứa hẹn trong chuỗi bài tổng hợp.
2. **Tìm bài đăng gốc:** Xác định bài viết của chính người trực tiếp làm việc (tác giả nguồn), không dựa vào lời kể của người tổng hợp lại.
3. **Thu thập dữ liệu kiểm chứng:**
   - Tên tài khoản tác giả (@handle).
   - Ngày đăng bài.
   - URL chuẩn (canonical URL).
   - Câu văn trích dẫn nguyên văn chứa số liệu tiền bạc hoặc kết quả tuyên bố.
4. **Phân loại bằng chứng (Receipts Status):**
   - *Có bằng chứng (Receipts):* Có ảnh chụp màn hình bảng điều khiển, hóa đơn thanh toán, sổ cái, giao dịch on-chain, kho lưu trữ code.
   - *Tuyên bố suông (Claimed):* Chỉ là lời khẳng định qua câu chữ, không có tài liệu chứng minh.
   - *Chưa xác minh (Unverified):* Không tìm thấy bài viết gốc hoặc tài khoản đã bị khóa/xóa.
5. **Tổng hợp bảng kết quả:** Sắp xếp danh sách theo mức độ có thể kiểm chứng từ cao xuống thấp (không xếp theo độ lớn của số tiền).

## Đầu ra
Bảng đối chiếu minh bạch gồm: Tác giả gốc, Ngày đăng, Liên kết nguồn, Trích dẫn nguyên văn và Tình trạng bằng chứng.

## Ranh giới an toàn
- Tuyệt đối không thay thế trích dẫn nguyên văn bằng lời diễn giải lại.
- Không xem lời khẳng định của người tổng hợp là bằng chứng xác thực.
- Nếu không tìm thấy bài gốc, bắt buộc ghi rõ "chưa xác minh", không suy đoán.
