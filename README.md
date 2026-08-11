# HICONIQUE - Luxury Construction & Design Website

![HICONIQUE Logo](public/images/logo.svg)

## Giới thiệu

HICONIQUE là website công ty thiết kế và xây dựng cao cấp, được xây dựng với Node.js, Express và EJS template engine.

## Tính năng

- ✅ Thiết kế responsive (mobile-first)
- ✅ Đa ngôn ngữ (Tiếng Việt / Tiếng Anh)
- ✅ Dark/Light mode
- ✅ Form liên hệ & báo giá
- ✅ Dự án portfolio với filter
- ✅ Blog tin tức
- ✅ FAQ accordion
- ✅ Tích hợp Zalo/Facebook Messenger
- ✅ Animation & scroll effects
- ✅ SEO optimized

## Công nghệ sử dụng

- **Backend**: Node.js + Express.js
- **Template**: EJS
- **CSS**: Custom CSS với CSS Variables
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Playfair Display, DM Sans, Cormorant Garamond)

## Cài đặt

```bash
# Clone repository
git clone https://github.com/pqhieu3820-dotcom/Hiconique-web.git
cd Hiconique-web

# Install dependencies
npm install

# Run development server
npm run dev

# Run production server
npm start
```

## Cấu trúc thư mục

```
hiconique-web/
├── public/
│   ├── css/          # CSS files
│   │   ├── variables.css
│   │   ├── main.css
│   │   └── components.css
│   └── js/           # JavaScript files
│       └── main.js
├── src/
│   ├── data/         # Data files (projects, services, team, blog)
│   ├── routes/      # Express routes
│   └── views/       # EJS templates
│       ├── pages/   # Page templates
│       └── partials/# Header, Footer, etc.
├── .env              # Environment variables
├── package.json
└── README.md
```

## Deploy lên Hostinger

### Bước 1: Push code lên GitHub

```bash
git add .
git commit -m "Initial HICONIQUE website"
git push -u origin main
```

### Bước 2: Cấu hình Hostinger

1. Đăng nhập vào Hostinger
2. Vào **Hosting** > **Manage** > **Git**
3. Kết nối với repository GitHub của bạn
4. Cấu hình:
   - **Repository**: pqhieu3820-dotcom/Hiconique-web
   - **Branch**: main
   - **Directory**: / (root)
   - **Deploy command**: `npm install && npm start`

### Bước 3: Cấu hình Node.js Version

Trong Hostinger dashboard:
- Vào **Hosting** > **Manage** > **Node.js**
- Chọn Node.js version: **18.x** hoặc **20.x**

### Bước 4: Cấu hình Environment Variables

Trong Hostinger:
- Vào **Hosting** > **Manage** > **Env Variables**
- Thêm các biến:
  - `PORT`: 3000
  - `NODE_ENV`: production

## Môi trường phát triển

- Node.js: 18.x hoặc cao hơn
- Port mặc định: 3000

## License

MIT License

## Liên hệ

- Website: https://hiconique.vn
- Email: info@hiconique.vn
- Phone: +84 123 456 789
