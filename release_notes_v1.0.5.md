# Math AI Lab - Ghi chú phát hành

## Phiên bản v1.0.5

### 1. Khảo sát & Biện luận Đồ Thị Hàm Số theo Tham số $m$ động (Đồ thị 2D)
* **Thanh điều khiển tham số $m$ thời gian thực:**
  * Tích hợp thanh trượt Slider $m \in [-5.0; 5.0]$ với bước nhảy $0.1$.
  * Hiển thị trực quan giá trị $m$ hiện hành trên thanh công cụ.
* **Hoạt hình biến thiên tự động (Animation Play/Pause):**
  * Nút bấm Play/Pause cho phép $m$ tự động tăng/giảm tuần hoàn theo chu kỳ $30\text{ms}$ (~$33\text{ FPS}$).
  * Đồ thị chuyển động mượt mà, giúp học sinh và giáo viên dễ dàng quan sát sự biến thiên của đồ thị và biện luận số nghiệm của phương trình $f(x, m) = 0$.
* **Đồng bộ hóa Bảng biến thiên:**
  * Bảng biến thiên tự động tính toán lại các điểm cực trị, tiệm cận và chiều biến thiên tương ứng với từng giá trị của $m$ theo thời gian thực.
* **Mẫu đồ thị 1-click (Preset $m$):**
  * Bổ sung nút mẫu sẵn `y = x³ - 3mx + 1 (Tham số m)` trong danh sách Đồ thị mẫu phổ biến, chỉ cần bấm là trải nghiệm ngay.
* **Nhận diện toán học nhanh không cần AI:**
  * Bộ phân tích cú pháp nội bộ đã hỗ trợ biến số `m`, giúp vẽ tức thì các hàm số như `x^3 - 3*m*x + 1`, `(x - m)/(x + 1)` mà không cần chờ kết nối mạng.

---

### 2. Tối ưu hệ thống & Tính độc lập
* **Nhúng độc lập Hệ thống Cài đặt (Standalone Settings):** Nhúng toàn diện modal Cài đặt vào bên trong các file HTML, giúp file chạy mượt mà ngay cả khi mở độc lập ở bất kỳ thư mục hay máy tính nào mà không phụ thuộc file JS ngoài.
* **Nâng cấp phiên bản hệ thống:** Đồng bộ toàn diện phiên bản `v1.0.5` (Android `versionCode 6`, `versionName "1.0.5"`).
* **Tối ưu quy trình phát hành CI/CD:** Tinh gọn các tiến trình đóng gói, tập trung vào bản cài đặt Android APK ổn định nhất.

