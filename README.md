# Limix Bot Teams

Kho **mẫu bot và mẫu nhóm bot đã Việt hóa** cho [Limix Bot](https://github.com/leomieo/limix-bot).
Trong Limix Bot: *Bản mẫu → Kho cộng đồng* sẽ đọc danh sách ở đây.

## Cấu trúc

```
catalog.json                      danh sách mẫu (định dạng "openmaus.catalog", phiên bản 1): "bots" và "teams"
bots/<mã-bot>.json                đầy đủ một bot mẫu (định dạng "limix.bot", phiên bản 1)
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

## Thêm một bot mẫu

Limix Bot chỉ tải danh sách nhẹ trong `catalog.json`; nội dung bot (`bots/<mã-bot>.json`) chỉ được tải khi người dùng bấm **Dùng mẫu**.

1. Tạo `bots/<mã-bot>.json` (mã: chữ thường, số, dấu gạch ngang), ví dụ:

```json
{
  "format": "limix.bot", "version": 1,
  "id": "ban-hang", "category": "sales",
  "name": "Bông", "title": "Trợ lý bán hàng",
  "description": "Trả lời khách và theo dõi đơn.",
  "soul": "Hướng dẫn cho bot, mỗi ý một dòng.",
  "look": { "color": "green", "mascotBody": "star" },
  "tryAsking": ["Hôm nay có đơn nào cần xử lý?"],
  "apps": [],
  "notes": { "memory/khach.md": "---\ntitle: Khách hàng\n---\n" },
  "routines": [{ "name": "Tóm tắt đơn sáng", "prompt": "Tóm tắt đơn mới.", "schedule": { "type": "daily", "time": "08:00", "weekdays": [1,2,3,4,5] } }]
}
```

2. Thêm một mục vào mảng `bots` trong `catalog.json` (id, name, title, category, description, try, look, apps,
   routines = số tác vụ định kỳ, file).

Quy tắc: `category` là everyday, work, writing, design, sales hoặc personal; `color` và `mascotBody` phải là màu/hình
có trong Limix Bot; ghi chú chỉ được đặt ở `MEMORY.md` hoặc `memory/<tên>.md`; tác vụ định kỳ luôn được thêm ở trạng
thái **tạm dừng**. Mục sai định dạng sẽ bị ẩn, các mục khác vẫn hiện.
