# Math AI Lab - Ghi chú phát hành

## Phiên bản v1.0.4

### 1. Hệ thống Cài đặt Độ phân giải & Giao diện toàn diện (Settings ⚙️)
- **Đồng bộ toàn bộ App**: Thêm nút Cài đặt ⚙️ trên cả Trang chủ, Khảo sát 2D và Hình học 3D, tự động lưu và đồng bộ tức thời qua `settings.js`.
- **Tùy chỉnh Độ phân giải đồ họa (Render Quality)**:
  - `Thấp (0.8x)`: Tiết kiệm pin, giảm tải GPU, máy mát.
  - `Tiêu chuẩn (1.0x)`: Cân bằng mượt mà.
  - `Cao (Mặc định - 1.8x)`: Nét căng, khử răng cưa mịn màng.
  - `Cực Nét (Max 2K/4K Native)`: Tận dụng tối đa màn hình độ phân giải cao của điện thoại cao cấp.
- **Tùy chỉnh Kích cỡ giao diện (UI Scale)**: Nhỏ gọn (1700px), Vừa vặn (1450px), To rõ (1150px) phù hợp mọi cỡ màn hình.
- **Tùy chỉnh Chất lượng xuất ảnh PNG**: HD 720p, Full HD 1080p, 2K/4K siêu nét.
- **Nút Quay về Trang Chủ (Home 🏠)**: Tích hợp nút Trang Chủ trên thanh điều hướng của cả 2D và 3D, chuyển trang 1 chạm tiện lợi.

### 2. Phân hệ Hình học Không gian 3D (`ungdunghinhoc3d.html`)
- **Chế độ Xem 2D như vẽ trên giấy (Paper Mode - phím P)**:
  - Chuyển hình 3D sang hình chiếu trục đo nghiêng (Cavalier), nền trắng, mực đen nét liền / nét đứt y hệt sách giáo khoa.
  - Tích hợp thanh công cụ vẽ tay trực tiếp trên 2D: Bút tự do, Đoạn thẳng, Mũi tên, Hình chữ nhật, Elip, Viết chữ, Tẩy xóa, vẽ Nét đứt (phím D).
  - Nút **Chụp ảnh vùng chọn (Snap Crop - phím 9)** và **Sao chép vào bộ nhớ tạm (Copy to clipboard)** để dán ngay (`Ctrl + V`) vào Word, PowerPoint, Zalo.
- **Bộ công cụ dựng hình chuẩn**: Trung trực đoạn thẳng, Hạ đường vuông góc từ điểm xuống đường thẳng, Dựng đường song song.
- **Ràng buộc hình học động (Dynamic Constraints)**: Điểm trung điểm, điểm hình chiếu tự động di chuyển theo khi kéo các đỉnh gốc.
- **Kéo đỉnh trực tiếp (Live Vertex Dragging)**: Cho phép kéo di chuyển đỉnh bất kỳ trực tiếp bằng chuột/chạm trong chế độ Xoay.
- **Lưới không gian vô hạn (Infinite Grid Shader)**: Lưới 3 mặt phẳng trải rộng vô tận, tự làm mờ theo khoảng cách, nhãn trục X, Y, Z luôn cố định kích thước rõ ràng.
- **Tự động sinh mặt phẳng cho hình do AI vẽ (`autoCreateFacesFromGeometry`)**, hỗ trợ nét đứt khuất và tô mặt phẳng.
- **Tự động nhận diện độ dài cạnh & chiều cao** từ câu lệnh AI (VD: "SA = 3", "SO = 4").
- **Khắc phục triệt để lỗi co rúm màn hình khi mở bàn phím ảo** trên điện thoại; chữ gõ to rõ 15px.

### 3. Phân hệ Khảo sát Đồ thị 2D (`dothi2d.html`)
- **Thanh tham số m động & Animation**: Slider chọn m từ -5 đến 5 và nút Play chạy biến thiên chuyển động thời gian thực cho cả đồ thị và bảng biến thiên.
- **Bố cục Topbar 1 hàng siêu gọn**: Gom Tiêu đề, Toolbar và Param Control vào 1 hàng duy nhất (~44px), giải phóng hơn gấp 4 lần chiều cao cho trục Oy.
- **Lưu ảnh đồ thị kết hợp Bảng biến thiên (PNG)**: Xuất 1 file ảnh chất lượng cao chứa cả đồ thị và bảng biến thiên (1 hàm hoặc tất cả các hàm).
- **Trình phân tích biểu thức toán học mới `mathToJs()`**: Tự động nhận diện nhân ngầm (`2x`, `2pi x`, `(x+1)(x-1)`), hỗ trợ biến thời gian t cho dao động điều hòa.
- **Nhận diện Lỗ thủng hàm phân thức**: Tự động phát hiện nghiệm triệt tiêu tử/mẫu để vẽ lỗ khuyết tròn rỗng thay vì vẽ nhầm tiệm cận.
- **Lịch sử lệnh vẽ (phím mũi tên lên/xuống)** và quản lý lịch sử chat AI.
- **Khắc phục triệt để lỗi co rúm màn hình khi mở bàn phím ảo**.

### 4. Đóng gói & Phát hành
- **Android**: File APK Release `MathAILab-v1.0.4.apk` đã ký số đầy đủ.
- **iOS**: Đóng gói tự động file IPA Unsigned `MathAILab-iOS-v1.0.4.ipa` qua GitHub Actions.
