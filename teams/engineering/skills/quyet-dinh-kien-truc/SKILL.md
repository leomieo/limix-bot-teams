---
name: quyet-dinh-kien-truc
description: Ghi lại một quyết định kỹ thuật trọng tâm cùng bối cảnh, các phương án thay thế, đánh đổi và kế hoạch theo dõi.
---

# Quyết định kiến trúc

## Khi nào sử dụng

Khi một lựa chọn triển khai quan trọng ảnh hưởng đến giao diện API, dữ liệu, bảo mật, vận hành, tính tương thích ngược hoặc công việc trong tương lai.

## Quy trình thực hiện

1. Khảo sát hệ thống hiện có và nêu rõ mục tiêu người dùng hoặc vận hành đang được bảo vệ.
2. Ghi lại các ràng buộc, dữ kiện đã biết, giả định và những mục tiêu nằm ngoài phạm vi.
3. Mô tả 2 hoặc 3 phương án thực tế, bao gồm cả phương án giữ nguyên thiết kế hiện tại.
4. So sánh độ phức tạp, khả năng hoàn tác (reversibility), tính tương thích, bảo mật, hiệu năng và chi phí bảo trì giữa các phương án.
5. Chọn phương án nhỏ gọn nhất đáp ứng được mục tiêu và giải thích lý do.
6. Xác định các hệ quả, nhu cầu chuyển đổi/khôi phục (rollback) và thời điểm hoặc điều kiện để xem xét lại lựa chọn này.

## Kết quả đầu ra

Cấu trúc gồm: Trạng thái, Bối cảnh, Quyết định, Các phương án thay thế, Hệ quả, Xác minh và Kế hoạch theo dõi.

## Ranh giới an toàn

Không tự bịa ra các ràng buộc hệ thống. Không dùng tài liệu quyết định kiến trúc để che giấu một quyết định sản phẩm chưa ngã ngũ hoặc biện minh cho cơ sở hạ tầng không cần thiết.
