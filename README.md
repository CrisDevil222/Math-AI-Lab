# Math AI Lab 📐🤖

[![Release](https://img.shields.io/github/v/release/CrisDevil222/Math-AI-Lab?color=blue&label=Phi%C3%AAn%20b%E1%BA%A3n)](https://github.com/CrisDevil222/Math-AI-Lab/releases/latest)
[![Build iOS App](https://github.com/CrisDevil222/Math-AI-Lab/actions/workflows/build-ios.yml/badge.svg)](https://github.com/CrisDevil222/Math-AI-Lab/actions/workflows/build-ios.yml)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-brightgreen)](https://github.com/CrisDevil222/Math-AI-Lab)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Math AI Lab** là ứng dụng di động hỗ trợ học tập, nghiên cứu và trực quan hóa toán học mạnh mẽ dành cho cả **Android** và **iOS**. Ứng dụng tích hợp mô hình hình học không gian 3D tương tác, công cụ khảo sát đồ thị hàm số 2D mượt mà và trợ lý trí tuệ nhân tạo (AI) giúp dựng hình trực quan thông qua câu lệnh tiếng Việt tự nhiên!

---

## ✨ Tính năng nổi bật

### 1. 🧊 Hình học không gian 3D tương tác
- **Dựng hình đa dạng**: Khối chóp, lăng trụ, hình trụ, hình nón, mặt cầu, các thiết diện và mặt phẳng cắt.
- **Tương tác 3D mượt mà**: Xoay đa chiều 360°, thu phóng, kéo thả camera, chọn điểm, đo góc, khoảng cách và tính thể tích.
- **Trợ lý AI thông minh**: Ra lệnh tạo hình học bằng tiếng Việt tự nhiên (hỗ trợ mô hình `openai/gpt-oss-120b` với cơ chế kiểm soát prompt an toàn, chống crash).
- **Lưu trữ & Chia sẻ**: Xuất/nhập file dữ liệu JSON, chia sẻ bản vẽ qua các ứng dụng mạng xã hội hoặc lưu trữ đám mây.

### 2. 📈 Khảo sát Đồ thị Hàm số 2D
- **Vẽ đồ thị chính xác cao**: Hỗ trợ đa dạng hàm số (đa thức, phân thức, lượng giác, mũ, logarit, trị tuyệt đối...).
- **Thuật toán chia đôi khoảng thông minh**: Tự động nhận diện điểm gián đoạn và tiệm cận đứng, triệt tiêu hiện tượng đứt nét ở các hàm dốc đứng ($x^3, x^5, \tan x...$).
- **Điểm bám tự động (Snap Point)**: Rê chuột hoặc chạm tay để tự động "hít" bám điểm gần nhất trên đồ thị, hiển thị tọa độ thời gian thực.
- **Trôi quán tính & Thu phóng mượt mà**: Trải nghiệm vuốt kéo (pan inertia) và phóng to/thu nhỏ (smooth zoom) như ứng dụng bản đồ cao cấp.
- **Công cụ giải tích**: Tự động tính đạo hàm $y'$, $y''$, tìm cực trị, điểm uốn và tiếp tuyến tại điểm.
---

## 📲 Hướng dẫn Cài đặt

Truy cập trang [Releases mới nhất](../../releases/latest) để tải về gói cài đặt phù hợp với thiết bị của bạn:

### 🤖 Cho điện thoại Android (`.apk`)
1. Tải về file `MathAILab-v1.0.2.apk`.
2. Mở file và chọn **Cài đặt**.
3. *(Nếu có thông báo bảo mật: Bật tùy chọn **Cho phép cài đặt ứng dụng từ nguồn này**).*

### 🍏 Cho iPhone / iPad (`.ipa`)
Ứng dụng được đóng gói tự động dưới dạng file `.ipa` Unsigned thông qua GitHub Actions CI/CD. Bạn có thể cài đặt dễ dàng bằng các công cụ:
- **Cách 1 - Sideloadly (Khuyên dùng trên Windows/Mac)**:
  1. Tải phần mềm [Sideloadly](https://sideloadly.io/) về máy tính.
  2. Kết nối iPhone/iPad với máy tính qua cáp sạc.
  3. Kéo thả file `MathAILab-iOS-v1.0.2.ipa` vào giao diện Sideloadly.
  4. Nhập Apple ID miễn phí của bạn và bấm **Start**. App sẽ được cài vào iPhone sau khoảng 1-2 phút.
  5. Trên iPhone: Vào **Cài đặt** > **Cài đặt chung** > **Quản lý VPN & Thiết bị** > Tin cậy chứng chỉ của Apple ID để mở app.
- **Cách 2 - AltStore / TrollStore**: Cài đặt trực tiếp nếu thiết bị của bạn đã được cấu hình sẵn.

---

## 🛠️ Hướng dẫn Phát triển & Build từ Mã nguồn

### Yêu cầu môi trường
- **Node.js**: Phiên bản 22.x LTS trở lên.
- **Android**: Android Studio & JDK 21 (Java 21 LTS).
- **iOS**: macOS với Xcode 16 trở lên (nếu build cục bộ) hoặc sử dụng GitHub Actions workflow có sẵn.

### 1. Cài đặt phụ thuộc
```bash
git clone https://github.com/CrisDevil222/Math-AI-Lab.git
cd Math-AI-Lab
npm install
```

### 2. Cấu hình API Key AI (Tùy chọn)
Tạo file `www/config.js` từ mẫu:
```bash
cp www/config.example.js www/config.js
```
Điền API Key của bạn từ [Groq Console](https://console.groq.com/keys) vào `www/config.js`:
```javascript
window.APP_CONFIG = {
    GROQ_API_KEY: "gsk_your_api_key_here"
};
```
*(File `config.js` đã được `.gitignore` bảo vệ, đảm bảo an toàn tuyệt đối không bị lộ lên Git).*

### 3. Build cho Android
```bash
npx cap sync android
cd android
./gradlew assembleDebug
```
File APK sẽ được tạo tại: `android/app/build/outputs/apk/debug/app-debug.apk`.

### 4. Build cho iOS
- **Qua GitHub Actions (Tự động)**: Đẩy tag mới (ví dụ `v1.0.2`) lên GitHub, GitHub Actions sẽ tự khởi chạy macOS runner với Xcode 16 để biên dịch và phát hành file `.ipa` đính kèm trong Release.
- **Cục bộ trên Mac**:
  ```bash
  npx cap sync ios
  npx cap open ios
  ```

---

## 📁 Cấu trúc Dự án

```
mathailab-mobile/
├── www/                         # Mã nguồn giao diện Web App
│   ├── index.html               # Trang chủ menu ứng dụng & kiểm tra update
│   ├── dothi2d.html             # Phân hệ Khảo sát Đồ thị 2D
│   ├── ungdunghinhoc3d.html     # Phân hệ Hình học Không gian 3D & Trợ lý AI
│   ├── config.example.js        # File cấu hình mẫu
│   └── config.js                # File cấu hình chứa API Key (bảo mật, không push git)
├── android/                     # Dự án Native Android (Capacitor)
├── ios/                         # Dự án Native iOS (Capacitor)
├── scripts/                     # Các module Swift tối ưu độc lập cho iOS SPM
│   ├── SharePlugin.swift        # Module chia sẻ cho iOS
│   └── FilesystemPlugin.swift   # Module lưu file JSON thuần Swift cho iOS
├── .github/workflows/           # Kịch bản CI/CD tự động
│   └── build-ios.yml            # Tự động build và đóng gói file .ipa bằng Xcode 16
├── capacitor.config.json        # Cấu hình Capacitor
└── package.json                 # Cấu hình dependencies npm
```

---

## 📄 Bản quyền & Đóng góp
Dự án được phân phối dưới giấy phép mã nguồn mở [MIT License](LICENSE). Mọi đóng góp (Pull Request, Báo lỗi Issue) từ cộng đồng đều được hoan nghênh nhiệt tình!
