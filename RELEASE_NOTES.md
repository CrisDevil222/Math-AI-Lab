# Math AI Lab - Ghi chú phát hành

## Phiên bản v1.0.3

### 1. Phân hệ Khảo sát Đồ thị 2D (`dothi2d.html`)
- **Nút Thu/Mở thanh bên phải (Sidebar Collapse/Expand)**: Tích hợp nút trượt thu gọn thanh công cụ bên phải sang mép màn hình, giải phóng 100% không gian đồ thị.
- **Bảng Biến Thiên Tự Động (SVG & Khảo sát giải tích)**:
  - Tự động khảo sát hàm số, tính đạo hàm, nghiệm, tiệm cận đứng/ngang, cực trị.
  - Vẽ Bảng Biến Thiên chuẩn sách giáo khoa bằng vector SVG động với các hàng $x$, $y'$, $y$, mũi tên đồng biến/nghịch biến, tiệm cận nét đôi và gạch chéo vùng không xác định.
  - Tóm tắt tập xác định, khoảng đồng biến/nghịch biến, cực trị.
- **Tìm Tâm Đối Xứng Đồ Thị (Nút & Phím tắt `S`)**: Quét điểm uốn, tiệm cận, kiểm tra đẳng thức đối xứng $f(x_0+t) + f(x_0-t) = 2y_0$ để chấm điểm đối xứng $I(x_0; y_0)$ màu cam.
- **Tìm Giao Điểm Đa Đồ Thị (Nút & Phím tắt `G`)**: Thuật toán chia đôi đổi dấu tự động phát hiện mọi giao điểm khi vẽ từ 2 đồ thị trở lên, vẽ vòng tròn vàng tại giao điểm và hiển thị tọa độ khi rê chuột.
- **Kéo Thả Điểm Trực Tiếp (Interactive Drag & Drop)**: Hỗ trợ kéo di chuyển điểm trên đồ thị; khi kéo điểm tiếp xúc $M$ của tiếp tuyến thì đường tiếp tuyến tự động xoay và cập nhật phương trình theo thời gian thực.
- **Thuật toán chia đôi khoảng liên tục `isContinuous`**: Triệt tiêu hiện tượng đứt nét ở các hàm dốc đứng ($x^3, x^5, \tan x...$).
- **Lưu & Mở Dự Án Đồ Thị (.json)**: Bổ sung 2 nút Lưu (phím tắt `Ctrl + S`) và Mở trực tiếp trên thanh công cụ để xuất/nhập file dự án đồ thị `.json` tiện lợi.
- **Rê chuột bám điểm (Snap Point)**, trôi quán tính (`pan inertia`) và phóng to/thu nhỏ mượt mà (`smooth zoom`).

### 2. Phân hệ Hình học Không gian 3D (`ungdunghinhoc3d.html`)
- **Nút Thu/Mở thanh bên phải**: Trượt ẩn/hiện thanh công cụ bên phải mượt mà.
- **Accordion thu gọn từng danh mục**: Cho phép bấm vào tiêu đề các danh sách (Đỉnh, Đường tròn, Vector, Cạnh) để ẩn/hiện gọn gàng.
- **Bổ sung các khối hình mẫu mới**: Hình nón cụt, hình chóp cụt đều.
- **Tự động co giãn giao diện (`fitUI`)**: Co giãn tỉ lệ màn hình tự động để không bị đè thanh công cụ trên mọi kích thước thiết bị.
- **Sửa lỗi cú pháp & prompt an toàn**: Fix lỗi `dir.normalize()`, prompt `safeMessages` chống crash khi gọi AI Groq.

### 3. Hệ thống & Đa nền tảng
- **Hỗ trợ iOS & Android**: Đóng gói tự động file `.ipa` Unsigned qua GitHub Actions và file `.apk` Release cho Android.
- **Bảo mật API Key**: Toàn bộ API Key Groq được chuyển sang lưu trữ qua file `config.js` cục bộ, bảo vệ an toàn khỏi việc bị lộ lên Git.
- **Nút Cập nhật & Badge phiên bản**: Tích hợp kiểm tra phiên bản mới trực tiếp từ GitHub Releases.
