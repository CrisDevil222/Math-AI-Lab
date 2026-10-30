# Math AI Lab 📐🤖

[![Release](https://img.shields.io/github/v/release/CrisDevil222/Math-AI-Lab?color=blue&label=Phi%C3%AAn%20b%E1%BA%A3n)](https://github.com/CrisDevil222/Math-AI-Lab/releases/latest)
[![Build iOS App](https://github.com/CrisDevil222/Math-AI-Lab/actions/workflows/build-ios.yml/badge.svg)](https://github.com/CrisDevil222/Math-AI-Lab/actions/workflows/build-ios.yml)
[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web%20%7C%20Windows-brightgreen)](https://github.com/CrisDevil222/Math-AI-Lab)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Math AI Lab** là nền tảng ứng dụng hỗ trợ học tập, nghiên cứu và trực quan hóa toán học tương tác toàn diện, đa nền tảng (**Android, iOS, Web và Windows Desktop**). 

Ứng dụng tích hợp mô hình hình học không gian 3D bắt mắt, công cụ khảo sát đồ thị hàm số 2D giải tích chuyên sâu, và **Trợ lý Trí tuệ Nhân tạo (AI Chatbot & Dựng hình)** hỗ trợ xử lý bằng câu lệnh tiếng Việt tự nhiên!

---

## ✨ Tính năng nổi bật

### 1. 🧊 Hình học Không gian 3D Tương tác (`ungdunghinhoc3d.html`)
- **Dựng hình đa dạng & chuyên sâu**: Dựng khối đa diện (chóp, lăng trụ, lập phương), khối tròn xoay (nón, trụ, nón cụt, chóp cụt đều, mặt cầu và **Khối cầu đặc 3D** đổ bóng không gian bắt ánh sáng chân thực).
- **Bộ dựng điểm đặc biệt của tam giác**: Tự động tính và dựng **Tâm đường tròn nội tiếp** (kèm đường phân giác), **Tâm đường tròn ngoại tiếp** (kèm trung trực và góc vuông $90^\circ$), trọng tâm và trực tâm trong không gian 3 chiều.
- **Tương tác 3D mượt mà**: Xoay tự do $360^\circ$, thu phóng, lia camera, di chuyển đỉnh động (khối cầu và các đường ràng buộc tự động bám theo), đo góc, tính khoảng cách và diện tích/thể tích.
- **Chế độ Vẽ trên giấy (Paper Mode - phím P)**: Chuyển toàn bộ hình 3D sang hình chiếu trục đo nghiêng (Cavalier) nét liền / nét đứt đen trắng y hệt sách giáo khoa; tích hợp bộ công cụ vẽ tay trực tiếp (bút tự do, thước thẳng, elip, viết chữ, tẩy).
- **Hệ trục tọa độ Oxyz & Mặt phẳng**: Hỗ trợ nhập phương trình mặt phẳng $(P)$ dạng $Ax + By + Cz + D = 0$, hiển thị pháp vectơ $\vec{n}$ trực quan.
- **Trợ lý AI Dựng hình & Chatbot hỏi công thức**: 
  - Ra lệnh dựng hình bằng tiếng Việt tự nhiên (*"Chóp S.ABCD đáy vuông SA vuông góc đáy"*, *"Dựng khối cầu đặc tâm O bán kính 3"*).
  - Khung Chatbot hỏi đáp công thức toán học không gian theo thời gian thực (hỗ trợ mô hình `openai/gpt-oss-120b` siêu tốc độ từ Groq).

---

### 2. 📈 Khảo sát Đồ thị Hàm số 2D Chuyên sâu (`dothi2d.html`)
- **Đa dạng hàm số & Độ chính xác cao**: Đa thức bậc 3, bậc 4, phân thức hữu tỉ bậc nhất/bậc nhất, bậc hai/bậc nhất, hàm lượng giác, mũ, logarit, trị tuyệt đối.
- **Hệ thống Bất phương trình & Miền nghiệm (Inequalities)**:
  - Nhập bất phương trình 1 ẩn hoặc hệ bất phương trình bậc nhất 2 ẩn (cách nhau bởi dấu `;`).
  - Tự động tô màu / gạch bóng mờ biểu diễn miền nghiệm đa giác lồi, tự động giải tọa độ đỉnh để phục vụ trực tiếp bài toán **Quy hoạch tuyến tính**.
  - Tự động chiếu và phân tích khoảng nghiệm của bất phương trình 1 ẩn.
- **Biện luận số nghiệm theo tham số $k$ (Đường thẳng $y = k$)**:
  - Thanh trượt tham số $k$ động với nút tăng/giảm bước nhảy $\pm 0.5$.
  - Tự động giải phương trình tương giao $f(x) = k$, đánh dấu các giao điểm và kết luận số nghiệm thời gian thực.
- **Tìm Giá trị lớn nhất & Giá trị nhỏ nhất (GTLN - GTNN)**: Nhập đoạn $[a, b]$ trực tiếp trên bảng biến thiên, tự động so sánh cực trị và hai đầu mút, đánh dấu trực quan điểm `Max` và `Min` trên đồ thị.
- **Cực trị động & Điểm uốn (phím U)**:
  - Cực đại (CĐ) và Cực tiểu (CT) bám chuyển động theo tham số $m$ thời gian thực.
  - Thuật toán số học quét đạo hàm cấp hai $y'' = f''(x)$ để xác định điểm uốn chính xác.
- **Tiệm cận nâng cao**: Nhận diện cực điểm vô cực để dựng tiệm cận đứng, tự động giải tích tiệm cận ngang và tiệm cận xiên $y = ax + b$.
- **Xuất ảnh chất lượng cao**: Xuất file ảnh PNG kết hợp Đồ thị + Bảng biến thiên với tỷ lệ vàng cân đối, bo góc thẩm mỹ phục vụ chèn vào tài liệu Word, bài giảng PowerPoint.

---

### 3. ⚙️ Hệ thống Cài đặt Toàn diện (Settings Modal)
- Nút Cài đặt ⚙️ đồng bộ tức thời giữa Trang chủ, Khảo sát 2D và Hình học 3D.
- **Tùy chỉnh độ phân giải đồ họa (Render Quality)**: Thấp (0.8x - tiết kiệm pin), Tiêu chuẩn (1.0x), Cao (1.8x), Cực nét (Native Max).
- **Tùy chỉnh cỡ giao diện (UI Scale)** & **Chất lượng xuất ảnh** (HD 720p, Full HD 1080p, 2K/4K).
- **Cơ chế cập nhật tự động 1 chạm**: Nút kiểm tra bản cập nhật trực tiếp từ GitHub Releases với thông báo tiếng Việt trực quan, tự động đối chiếu số phiên bản Semantic Versioning.

---

## 📲 Hướng dẫn Cài đặt

Truy cập trang [Releases Mới Nhất](../../releases/latest) để tải về gói cài đặt phù hợp với thiết bị của bạn:

### 🤖 Cho điện thoại Android (`.apk`)
1. Tải về file `MathAILab-v1.0.7.1.apk`.
2. Mở file APK trên điện thoại và chọn **Cài đặt**.
3. *(Nếu có cảnh báo bảo mật: Bật tùy chọn **Cho phép cài đặt ứng dụng từ nguồn không xác định**).*

### 🍏 Cho iPhone / iPad (`.ipa`)
Ứng dụng được đóng gói tự động dưới dạng file `.ipa` Unsigned thông qua GitHub Actions CI/CD:
- **Cách 1 - Sideloadly (Khuyên dùng trên Windows/Mac)**:
  1. Tải phần mềm [Sideloadly](https://sideloadly.io/) về máy tính.
  2. Kết nối iPhone/iPad với máy tính qua cáp sạc.
  3. Kéo thả file `MathAILab-iOS-v1.0.7.1.ipa` vào giao diện Sideloadly.
  4. Nhập Apple ID miễn phí của bạn và bấm **Start**.
  5. Trên iPhone: Mở **Cài đặt** > **Cài đặt chung** > **Quản lý VPN & Thiết bị** > Tin cậy chứng chỉ để sử dụng.
- **Cách 2 - AltStore / TrollStore**: Cài đặt trực tiếp nếu thiết bị đã được cấu hình sẵn.

### 💻 Cho máy tính (Windows / Web)
- Mở trực tiếp file `www/index.html` (hoặc `www/home.html`) trên mọi trình duyệt web hiện đại (Google Chrome, Edge, Cốc Cốc, Brave).
- Hoặc đóng gói thành ứng dụng desktop độc lập thông qua Electron.

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
    GROQ_API_KEY: "gsk_your_api_key_here",
    GROQ_KEY_DRAW_2D: "gsk_your_draw_key_here",
    GROQ_KEY_CHAT_2D: "gsk_your_chat_key_here",
    GROQ_KEY_DRAW_3D: "gsk_your_draw_3d_key_here",
    GROQ_KEY_CHAT_3D: "gsk_your_chat_3d_key_here"
};
```
*(File `config.js` đã được `.gitignore` bảo vệ, đảm bảo an toàn tuyệt đối không bị lộ lên Git).*

### 3. Build cho Android
```bash
npx cap sync android
cd android
./gradlew assembleRelease
```
File APK Release sẽ được tạo tại: `android/app/build/outputs/apk/release/app-release.apk`.

---

## 📁 Cấu trúc Dự án

```
mathailab-mobile/
├── www/                         # Mã nguồn giao diện Web App & Thuật toán lõi
│   ├── index.html               # Trang chủ menu ứng dụng & kiểm tra update
│   ├── dothi2d.html             # Phân hệ Khảo sát Đồ thị 2D & Bất phương trình
│   ├── ungdunghinhoc3d.html     # Phân hệ Hình học Không gian 3D & AI Chatbot
│   ├── settings.js              # Hệ thống cài đặt giao diện & đồ họa toàn diện
│   ├── config.example.js        # File cấu hình mẫu
│   └── config.js                # File cấu hình chứa API Key (bảo mật, không push git)
├── android/                     # Dự án Native Android (Capacitor)
├── ios/                         # Dự án Native iOS (Capacitor)
├── scripts/                     # Các module Swift tối ưu độc lập cho iOS SPM
│   ├── SharePlugin.swift        # Module chia sẻ hình ảnh cho iOS
│   └── FilesystemPlugin.swift   # Module lưu trữ file JSON thuần Swift cho iOS
├── .github/workflows/           # Kịch bản CI/CD tự động (build iOS, kiểm tra code)
├── capacitor.config.json        # Cấu hình Capacitor
└── package.json                 # Cấu hình dependencies npm
```

---

## 👥 Tác giả & Phát triển Dự án (Authors & Contributors)

Dự án **Math AI Lab** được khởi xướng, thiết kế và phát triển bởi:

- **Nguyễn Vĩnh Thiện** ([@raidenbmei](https://github.com/raidenbmei))
  - *Ý tưởng thiết kế & Phát triển nhân thuật toán lõi Hình học Không gian 3D, Khảo sát Giải tích Đồ thị 2D, Tích hợp Trợ lý Trí tuệ Nhân tạo Groq AI*.
  
- **CrisDevil222** ([@CrisDevil222](https://github.com/CrisDevil222))
  - *Kiến trúc & Tối ưu hóa nền tảng Ứng dụng Di động (Android APK & iOS Capacitor), Hệ thống Cài đặt đa màn hình, Tự động hóa CI/CD, Đóng gói & Phát hành bản phát hành chính thức*.

---

## 📄 Bản quyền & Giấy phép
Dự án được phân phối dưới giấy phép mã nguồn mở [MIT License](LICENSE). Mọi đóng góp (Pull Request, Báo lỗi Issue) từ cộng đồng đều được hoan nghênh nhiệt tình!
