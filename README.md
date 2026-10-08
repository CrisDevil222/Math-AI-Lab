# Math AI Lab

Math AI Lab là một ứng dụng hỗ trợ khảo sát toán học mạnh mẽ, hỗ trợ vẽ mô hình hình học không gian 3D và khảo sát đồ thị hàm số 2D. Đặc biệt, ứng dụng tích hợp trợ lý AI từ Groq để bạn có thể vẽ hình trực tiếp bằng ngôn ngữ tự nhiên!

## Tính năng chính
- **Hình học 3D**: Vẽ các khối chóp, lăng trụ, hình trụ, cầu và thao tác xoay, kéo thả, nối cạnh bằng trực quan.
- **Đồ thị 2D**: Khảo sát và vẽ hàm số, xác định tiệm cận, đạo hàm y', y'' và tiếp tuyến.
- **Trợ lý AI**: Ra lệnh vẽ hình bằng ngôn ngữ tự nhiên tiếng Việt. Hỗ trợ giải đáp công thức toán.
- **Lưu trữ**: Hỗ trợ xuất, nhập file dữ liệu để tiếp tục công việc vào lúc khác.

## Hướng dẫn cài đặt (Cho thiết bị Android)
- **Tải xuống**: Truy cập mục [Releases](../../releases) và tải về file `.apk` mới nhất.
- **Cài đặt**: Bạn nhớ bật tính năng **Cho phép cài đặt từ nguồn không xác định (Unknown sources)** trong cài đặt bảo mật của điện thoại và mở file APK để cài đặt.
*Lưu ý: Hiện tại ứng dụng chỉ hỗ trợ Android, chưa có bản iOS.*

## Hướng dẫn Build từ mã nguồn
**Yêu cầu:** Node.js, Android Studio và JDK 21 (Java 21 LTS).

1. Tải mã nguồn về và cài đặt thư viện:
   ```bash
   npm install
   ```
2. Cấu hình API Key AI:
   Copy file `www/config.example.js` thành `www/config.js` và điền key của bạn từ Groq.
3. Đồng bộ Capacitor cho nền tảng Android:
   ```bash
   npx cap sync android
   ```
4. Build dự án:
   ```bash
   cd android
   ./gradlew.bat assembleDebug
   ```

## Cấu trúc thư mục
- `www/`: Mã nguồn Web App (HTML, CSS, JS thuần).
- `android/`: Native Android project do Capacitor quản lý.
- `assets/`: Các tài nguyên Icon và Splash Screen gốc.

