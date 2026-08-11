# Hướng dẫn Deploy HICONIQUE Website lên Hostinger

## Tổng quan

Hướng dẫn này giúp bạn deploy website HICONIQUE từ GitHub lên Hostinger.

## Bước 1: Chuẩn bị GitHub Repository

### Nếu chưa có repository:

1. Tạo repository mới trên GitHub: https://github.com/new
   - Repository name: `Hiconique-web`
   - Description: HICONIQUE - Luxury Construction & Design Website
   - Public/Private: Public

2. Push code lên GitHub:

```bash
cd Hiconique-web
git init
git add .
git commit -m "Initial HICONIQUE website"
git branch -M main
git remote add origin https://github.com/pqhieu3820-dotcom/Hiconique-web.git
git push -u origin main
```

### Nếu đã có repository:

```bash
git add .
git commit -m "Update HICONIQUE website"
git push
```

## Bước 2: Đăng ký Domain & Hosting trên Hostinger

### Đăng ký Domain:
1. Truy cập https://www.hostinger.vn
2. Tìm kiếm domain mong muốn (ví dụ: hiconique.vn, hiconique.com)
3. Thanh toán và đăng ký

### Đăng ký Hosting:
- Chọn gói hosting phù hợp (Premium hoặc Business cho Node.js)
- Hosting plans: https://www.hostinger.vn/hosting

## Bước 3: Kết nối GitHub với Hostinger

### Cách 1: Sử dụng Git Integration (Khuyến nghị)

1. Đăng nhập vào Hostinger hPanel
2. Vào **Hosting** > Chọn domain của bạn > **Git**
3. Click **Connect Git**
4. Điền thông tin:
   - **Repository URL**: `https://github.com/pqhieu3820-dotcom/Hiconique-web`
   - **Branch**: `main`
   - **Directory**: `/` (root)
5. Click **Connect**

### Cách 2: Deploy thủ công qua FTP

1. Tải code từ GitHub về máy
2. Nén thư mục thành .zip
3. Upload qua File Manager:
   - Vào **Hosting** > **File Manager**
   - Upload vào thư mục `public_html`
4. Giải nén và cài đặt dependencies

## Bước 4: Cấu hình Node.js trên Hostinger

1. Vào **Hosting** > **Manage** > **Node.js**
2. Cấu hình:
   - **Node.js version**: 18.x hoặc 20.x
   - **Application mode**: Production
   - **Application root**: /
   - **Application startup file**: src/index.js

3. Click **Save** và chờ khởi động

## Bước 5: Cấu hình Environment Variables

Vào **Hosting** > **Manage** > **Env Variables**:

| Tên biến | Giá trị |
|----------|---------|
| PORT | 3000 |
| NODE_ENV | production |

## Bước 6: Cấu hình Domain (DNS)

### Nếu mua domain trên Hostinger:
- Domain sẽ tự động trỏ đến hosting

### Nếu domain từ nhà cung cấp khác:
1. Vào **Hosting** > **Manage** > **DNS Zone**
2. Lấy thông tin nameservers:
   - ns1.hostinger.com
   - ns2.hostinger.com
   - ns3.hostinger.com
   - ns4.hostinger.com
3. Cập nhật tại nhà cung cấp domain

## Bước 7: Kiểm tra sau Deploy

1. Truy cập domain của bạn
2. Kiểm tra các trang:
   - Trang chủ: /
   - Giới thiệu: /about
   - Dịch vụ: /services
   - Dự án: /projects
   - Liên hệ: /contact

3. Kiểm tra tính năng:
   - Chuyển đổi ngôn ngữ (VI/EN)
   - Dark/Light mode
   - Form liên hệ
   - Form báo giá

## Xử lý sự cố

### Lỗi thường gặp:

1. **Error: Port already in use**
   - Giải pháp: Kiểm tra xem có ứng dụng khác đang chạy trên port 3000 không

2. **Module not found**
   - Giải pháp: Chạy `npm install` trên Hostinger

3. **Application failed to start**
   - Giải pháp: Kiểm tra Node.js version trong hPanel

4. **Domain not pointing correctly**
   - Giải pháp: Đợi 24-48 giờ để DNS propagate

## Cập nhật website sau khi deploy

Mỗi khi cập nhật code:

```bash
# Trên máy tính
git add .
git commit -m "Update..."
git push
```

Hostinger sẽ tự động deploy code mới. Hoặc vào Git > **Deploy** > **Manual Deploy**.

## Hỗ trợ

- Hostinger Support: https://www.hostinger.vn/contact
- Documentation: https://support.hostinger.com

---

**Chúc bạn deploy thành công!**
