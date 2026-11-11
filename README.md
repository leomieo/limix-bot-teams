# Limix Bot Teams

Kho **mẫu nhóm bot đã Việt hóa** cho [Limix Bot](https://github.com/leomieo/limix-bot).
Trong Limix Bot: *Bản mẫu → Kho cộng đồng* sẽ đọc danh sách ở đây.

## Cấu trúc

```
catalog.json                      danh sách mẫu (định dạng "openmaus.catalog", phiên bản 1)
teams/<mã-mẫu>/
  <mã-mẫu>.mausteam.json          mô tả nhóm bot
  README.md                       giới thiệu mẫu bằng tiếng Việt
  skills/<tên>/SKILL.md           kỹ năng đi kèm (nếu có)
```

## Thêm một mẫu

1. Tạo thư mục `teams/<mã-mẫu>/` (mã chỉ gồm chữ thường, số và dấu gạch ngang).
2. Thêm một mục vào `catalog.json`, ví dụ:

```json
{
  "slug": "ban-hang-mau",
  "name": "Nhóm bán hàng",
  "summary": "Trả lời khách, theo dõi đơn, nhắc lịch hẹn.",
  "category": "Bán hàng",
  "members": 3,
  "manifest": "teams/ban-hang-mau/ban-hang-mau.mausteam.json",
  "readme": "teams/ban-hang-mau/README.md",
  "skills": [],
  "requires": { "apps": [] }
}
```

`members` là số bot trong nhóm (1–200), `skills` là danh sách đường dẫn tới các tệp `SKILL.md` trong
`teams/<mã-mẫu>/skills/`. Tối đa 100 mẫu.

Mẫu tiếng Việt đầu tiên sẽ được thêm sau. Hiện danh sách còn trống nên Limix Bot sẽ hiện "chưa có mẫu".
