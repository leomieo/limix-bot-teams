---
name: implementation-plan
description: Chuyển đổi một mục tiêu yêu cầu thành các bước triển khai theo trình tự, có phân công trách nhiệm và phương pháp xác minh.
---

# Kế hoạch Triển khai (Implementation Plan)

## Khi nào sử dụng

Khi một tính năng mới, bản vá lỗi, chuyển đổi dữ liệu hoặc tái cấu trúc (refactor) liên quan đến nhiều tệp, nhiều tầng kiến trúc hoặc nhiều người phụ trách.

## Quy trình thực hiện

1. Nêu lại mục tiêu mà người dùng nhìn thấy được và các tiêu chí chấp nhận (acceptance criteria).
2. Khảo sát các luồng mã nguồn liên quan, kiểm thử hiện có, dữ liệu lưu trữ và các ràng buộc khi phát hành.
3. Tách biệt phần việc bắt buộc khỏi các cải tiến tùy chọn tiếp theo, đồng thời xác định các yêu cầu về tính tương thích.
4. Chia nhỏ công việc thành các bước độc lập nhỏ nhất có thể kiểm chứng được.
5. Phân công người hoặc chuyên môn phụ trách cho từng bước và nêu rõ các phần phụ thuộc (dependencies).
6. Xác định các bài kiểm thử tương xứng, kiểm tra thủ công, đo lường từ xa (telemetry), kế hoạch khôi phục (rollback) và tài liệu hướng dẫn.

## Đầu ra

Bao gồm: Phạm vi (Scope), Mục tiêu ngoài phạm vi (Non-goals), Các giả định, Danh sách công việc theo thứ tự, Phân công trách nhiệm, Kiểm thử, Rủi ro, Kế hoạch triển khai (Rollout) và Định nghĩa hoàn thành (Definition of Done).

## Ranh giới an toàn

Không đề xuất sửa đổi mã nguồn trước khi khảo sát kỹ hành vi hiện tại. Giữ nguyên vẹn các phần việc không liên quan của người dùng và luôn yêu cầu xác nhận trước khi thực hiện các di chuyển dữ liệu mang tính phá hủy hoặc hành động bên ngoài không thể hoàn tác.
