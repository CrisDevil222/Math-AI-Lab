# Math AI Lab - Ghi chú phát hành

## Phiên bản v1.0.6.1 (Bản vá lỗi & Dọn dẹp hệ thống)

### 1. Khắc phục sự cố & Tối ưu hóa trải nghiệm
- **Sửa triệt để lỗi kiểm tra phiên bản**:
  - Khắc phục lỗi hiển thị thông báo yêu cầu cập nhật dù người dùng đã nâng cấp lên bản mới nhất.
  - Sau khi cập nhật lên v1.0.6.1, khi bấm kiểm tra hệ thống sẽ hiển thị chuẩn xác thông báo xanh: *“Bạn đang ở phiên bản mới nhất!”*.
- **Tối ưu hóa bảng thông báo cập nhật trên điện thoại**:
  - Trình bày ghi chú phát hành theo tiếng Việt tự nhiên, trực quan, dễ hiểu.
  - Loại bỏ hoàn toàn các ký hiệu định dạng thô (dấu hoa thị, mã toán LaTeX), chuyển đổi sang ký tự toán học tiêu chuẩn và dấu gạch đầu dòng rõ ràng.
- **Dọn dẹp và tinh gọn dự án**:
  - Xóa bỏ toàn bộ các tệp tin APK cũ và tệp tạm trong mã nguồn, tối ưu hóa dung lượng dự án.

### 2. Tổng hợp tính năng nổi bật của chuỗi v1.0.6
- **Biện luận số nghiệm theo tham số k (Đường thẳng y = k)**: Thanh trượt k thời gian thực, tự động giải nghiệm tương giao và đánh dấu trực quan trên đồ thị.
- **Tìm Giá trị lớn nhất & Giá trị nhỏ nhất (GTLN - GTNN)**: Nhập đoạn [a, b] trực tiếp trong khung Bảng Biến Thiên, tự động so sánh các điểm cực trị và đầu mút, đánh dấu điểm Max / Min nổi bật.
- **Cực trị động thời gian thực**: Các điểm Cực đại và Cực tiểu tự động di chuyển bám sát đồ thị khi kéo thanh trượt m hoặc bật chuyển động Play.
- **Tùy chỉnh khoảng chạy tham số m**: Hai ô nhập linh hoạt [Từ; Đến] tùy ý mở rộng dải khảo sát.
- **Tối ưu xuất ảnh PNG**: Bảng biến thiên thu nhỏ vừa vặn, bo góc sang trọng, chuẩn tỷ lệ vàng để chèn bài giảng.

## Phiên bản v1.0.6

### 1. Phân hệ Khảo sát Đồ thị 2D (`dothi2d.html`)
- **Tùy chỉnh khoảng chạy tham số $m$ (`mStart` $\to$ `mEnd`)**:
  - Bổ sung 2 ô nhập trực tiếp *Từ* và *đến* cạnh slider $m$, cho phép khảo sát với mọi khoảng biến thiên tùy ý.
  - Thuật toán `applyMRange()` tự động hoán đổi thông minh nếu người dùng nhập ngược thứ tự.
- **Cực trị động bám theo đồ thị theo thời gian thực (Real-time Dynamic Extrema)**:
  - Khi bấm *Tự tìm cực trị*, các điểm Cực đại (CĐ) và Cực tiểu (CT) sẽ bám sát chuyển động uốn lượn của đồ thị khi kéo $m$ hoặc bấm Play.
  - Thuật toán quét nghiệm Bisection cải tiến tự động nhận diện và loại bỏ nghiệm cực trị ảo do tiệm cận đứng gây ra.
  - Tự động ẩn điểm khi hàm số mất cực trị và hiện lại khi có cực trị trở lại.
- **Tính năng Tìm Giá trị lớn nhất & nhỏ nhất (GTLN - GTNN) trên đoạn $[a; b]$**:
  - Tích hợp thanh công cụ chuyên dụng trực tiếp trong khung **Bảng Biến Thiên**: ô nhập $a, b$, nút *Tính GTLN-NN* và nút *Bỏ đánh dấu*.
  - Tự động so sánh giá trị tại 2 đầu mút và tất cả các điểm đạo hàm triệt tiêu $y'=0$ trong khoảng $(a, b)$, có cảnh báo nếu đoạn chứa điểm gián đoạn.
  - Hiển thị công thức kết quả Max/Min và vị trí $x$ tương ứng rõ ràng trên thanh trạng thái.
  - Đồng thời đánh dấu trực quan 2 điểm nổi bật `Max[a; b]` (màu vàng) và `Min[a; b]` (màu xanh neon) trên đồ thị.
- **Tính năng Biện luận số nghiệm theo tham số $k$ (Đường thẳng ngang $y = k$)**:
  - Nút công cụ mới **`Biện Luận y = k`** trên thanh Topbar.
  - Bảng điều khiển nổi linh hoạt với thanh trượt $k$, ô nhập số và các nút tăng/giảm bước nhảy $\pm 0.5$.
  - Đường nét đứt màu cam nổi bật $y = k$ trên toàn đồ thị.
  - Tự động giải phương trình tương giao $f(x) = k$, đánh dấu các giao điểm tròn đỏ viền vàng và hiển thị tọa độ các nghiệm $(x_1, x_2, \dots)$.
  - Trực quan hóa số nghiệm thời gian thực: *“N nghiệm phân biệt (x ≈ ...)”* hoặc *“Vô nghiệm”*.
- **Tối ưu hóa tính năng Lưu ảnh (PNG) Đồ thị + Bảng biến thiên**:
  - Tinh chỉnh hệ số co giãn bảng biến thiên (khống chế tỷ lệ tối đa $\le 0.82$, chiều cao $\le 36\%$ chiều cao đồ thị).
  - Bổ sung khung nền bo góc bán trong suốt giúp ảnh xuất ra cân đối, sắc nét, đạt tỷ lệ vàng để chèn vào Word/PowerPoint.

### 2. Nâng cấp Hệ thống & Tương thích Di động
- Đồng bộ toàn diện trên cả giao diện Web máy tính và ứng dụng Android APK.
- Khắc phục các vấn đề tỷ lệ giao diện và tương thích kích cỡ màn hình.

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
