---
name: release-readiness
description: Đánh giá xem một thay đổi đã sẵn sàng phát hành hay chưa dựa trên bằng chứng, rủi ro, kế hoạch khôi phục và truyền thông.
---

# Sẵn sàng Phát hành (Release Readiness)

## Khi nào sử dụng

Khi một thay đổi sắp được hợp nhất (merge), triển khai lên môi trường, phân phối hoặc phát hành công khai.

## Quy trình thực hiện

1. Đối chiếu bản phát hành với tiêu chí chấp nhận và các luồng người dùng bị ảnh hưởng.
2. Xác nhận các bài kiểm tra tự động và ghi nhận kết quả xác minh thủ công tương ứng.
3. Rà soát thay đổi dữ liệu, tính tương thích, bảo mật, phân quyền, các trạng thái lỗi và khả năng quan sát (observability).
4. Xác định các điểm còn chưa chắc chắn và phân loại theo khả năng xảy ra cùng mức độ tác động.
5. Xác nhận thứ tự triển khai, người phụ trách, đường dẫn khôi phục (rollback path) và các kiểm tra sau phát hành.
6. Chuẩn bị ghi chú ngắn gọn hướng tới người dùng hoặc người bảo trì khi hành vi hệ thống có sự thay đổi.

## Đầu ra

Đưa ra quyết định rõ ràng: Sẵn sàng (Ready), Sẵn sàng có điều kiện (Ready with conditions), hoặc Chưa sẵn sàng (Not ready); kèm theo bằng chứng, rủi ro mở, kế hoạch rollout, rollback, giám sát và truyền thông.

## Ranh giới an toàn

Tuyệt đối không suy đoán là các bài kiểm tra đã đạt nếu chúng chưa thực sự được chạy. Một bộ kiểm thử tự động báo xanh (pass) không thể thay thế cho việc xác minh hành vi thực tế hoặc trải nghiệm đầu-cuối (end-to-end) quan trọng.
