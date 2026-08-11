# HICONIQUE - Website Specification

## 1. Project Overview

### Project Information
- **Project Name**: HICONIQUE - Luxury Construction & Design Company Website
- **Project Type**: Corporate Website (Design & Build Company)
- **Framework**: Node.js + Express + EJS
- **Repository**: https://github.com/pqhieu3820-dotcom/Hiconique-web.git
- **Target Users**: Individual homeowners, businesses, organizations seeking high-end architectural and interior design services

### Company Identity
- **Company Name**: HICONIQUE
- **Tagline/Slogan**: "Crafting Iconic Uniqueness. Where Space Becomes Legacy." (Kiến tạo sự độc bản mang tính biểu tượng. Nơi không gian trở thành di sản.)
- **Services**: Architectural Design, Interior Design, Construction, Renovation, Design & Build Turnkey Solutions

---

## 2. Brand Identity (from provided assets)

### Color Palette
| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Prussian Blue** | `#192434` | Primary - Headers, backgrounds, main elements |
| **Espresso** | `#4F2C1D` | Secondary - Accent, buttons, highlights |
| **Warm Brown** | `#8B6914` | Accent - Decorative elements |
| **Light Cream** | `#F5F2ED` | Light backgrounds, cards |
| **Pure White** | `#FFFFFF` | Text on dark, contrast |
| **Soft Gray** | `#F8F8F8` | Section backgrounds |
| **Charcoal** | `#2D2D2D` | Body text |

### Typography
- **Primary Font**: Playfair Display (headings) - Elegant, luxury serif
- **Secondary Font**: Inter / DM Sans (body) - Clean, modern sans-serif
- **Accent Font**: Cormorant Garamond (quotes, testimonials)

### Visual Elements
- Logo: Architectural icon with stylized building shapes
- Icon Style: Line icons, minimal stroke
- Photography Style: High-quality architectural shots, warm lighting

---

## 3. Design Philosophy

### Combined Style (from references)
- **Minimalism** (nutdesign.vn / phananh.live): Generous whitespace, large typography
- **Warmth** (sendesign.vn): Material textures, organic elements
- **Luxury** (bazzo / thaicong): Premium feel, refined details
- **Brand Colors**: Prussian Blue + Espresso integration

### Layout Principles
- Mobile-first responsive design
- Generous whitespace (80-120px between sections)
- Full-width hero sections
- Asymmetric grid layouts for visual interest
- Parallax scroll effects
- Smooth reveal animations on scroll

---

## 4. Page Structure

### All Required Pages

| # | Page | Route | Description |
|---|------|-------|-------------|
| 1 | **Home** | `/` | Hero, services overview, featured projects, why choose us, CTA |
| 2 | **About** | `/about` | Company history, vision, mission, values, achievements |
| 3 | **Services** | `/services` | Detailed services list with descriptions |
| 4 | **Projects/Portfolio** | `/projects` | Project gallery with filtering |
| 5 | **Project Detail** | `/projects/:slug` | Individual project showcase |
| 6 | **Process** | `/process` | Step-by-step workflow |
| 7 | **Team** | `/team` | Team members, architects profiles |
| 8 | **Blog** | `/blog` | News, articles, trends |
| 9 | **Blog Detail** | `/blog/:slug` | Individual article |
| 10 | **Contact** | `/contact` | Contact form, map, info |
| 11 | **Quote Request** | `/quote` | Request a quote form |
| 12 | **FAQ** | `/faq` | Frequently asked questions |

---

## 5. Features Specification

### Core Features
- [x] Responsive design (Mobile, Tablet, Desktop)
- [x] Multi-language (Vietnamese / English)
- [x] Dark / Light mode toggle
- [x] Form validation (Contact, Quote)
- [x] Project filtering (by category)
- [x] Blog categories
- [x] SEO optimization
- [x] Smooth scroll animations

### Integrations
- [x] Facebook Messenger link
- [x] Zalo link
- [x] Phone call button
- [x] Email integration

### UI Components
- Sticky navigation
- Floating contact buttons (mobile)
- Search functionality (blog)
- Back to top button
- Loading animations
- Newsletter subscription

---

## 6. Technical Stack

### Dependencies
```json
{
  "name": "hiconique-web",
  "version": "1.0.0",
  "description": "HICONIQUE - Luxury Construction & Design Website",
  "main": "src/index.js",
  "scripts": {
    "start": "node src/index.js",
    "dev": "nodemon src/index.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "ejs": "^3.1.9",
    "dotenv": "^16.3.1",
    "express-rate-limit": "^7.1.5",
    "helmet": "^7.1.0",
    "compression": "^1.7.4"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

### Project Structure
```
hiconique-web/
├── public/
│   ├── css/
│   │   ├── variables.css
│   │   ├── main.css
│   │   ├── components.css
│   │   ├── pages.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── main.js
│   │   ├── animations.js
│   │   └── i18n.js
│   ├── images/
│   │   ├── logo.svg
│   │   ├── favicon.ico
│   │   └── (project images placeholder)
│   └── uploads/
├── src/
│   ├── routes/
│   │   ├── index.js
│   │   ├── about.js
│   │   ├── services.js
│   │   ├── projects.js
│   │   ├── blog.js
│   │   ├── contact.js
│   │   └── ...
│   ├── views/
│   │   ├── partials/
│   │   │   ├── header.ejs
│   │   │   ├── footer.ejs
│   │   │   └── ...
│   │   ├── pages/
│   │   │   ├── home.ejs
│   │   │   ├── about.ejs
│   │   │   └── ...
│   │   └── layouts/
│   │       └── main.ejs
│   ├── data/
│   │   ├── projects.json
│   │   ├── services.json
│   │   ├── team.json
│   │   └── blog.json
│   ├── config/
│   │   └── index.js
│   └── index.js
├── .env
├── package.json
└── README.md
```

---

## 7. Content Strategy (Placeholders)

Since actual content is not provided, use professional placeholders:

### Homepage Hero
- **Headline**: "Crafting Iconic Uniqueness"
- **Subheadline**: "Where Space Becomes Legacy"
- **CTA**: "Khám phá dự án" / "Liên hệ ngay"

### Services (6 main services)
1. Thiết kế Kiến trúc (Architectural Design)
2. Thiết kế Nội thất (Interior Design)
3. Thi công Xây dựng (Construction)
4. Cải tạo & Nâng cấp (Renovation)
5. Tư vấn Giám sát (Consulting & Supervision)
6. Thiết kế & Thi công Trọn gói (Design & Build)

### Sample Projects (6-8 placeholders)
- Biệt thự cao cấp
- Căn hộ penthouse
- Showroom doanh nghiệp
- Nhà hàng sang trọng
- Khách sạn boutique
- Văn phòng corporate

---

## 8. Deployment

### GitHub Integration
- Repository: https://github.com/pqhieu3820-dotcom/Hiconique-web.git
- Branch: main

### Hostinger Deployment
- **Platform**: Hostinger (shared hosting)
- **Node.js Version**: 18.x or 20.x
- **Build Command**: Not required (Express serves directly)
- **Entry Point**: src/index.js

---

## 9. Acceptance Criteria

### Visual Checkpoints
- [ ] Logo and brand colors consistently applied
- [ ] All 12 pages implemented and accessible
- [ ] Responsive on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Smooth scroll animations
- [ ] Language switcher works correctly
- [ ] Dark/Light mode toggle functional
- [ ] All forms validate input

### Functionality Checkpoints
- [ ] Navigation links work correctly
- [ ] Project filtering works
- [ ] Blog pagination/filtering works
- [ ] Contact form submits (console log for demo)
- [ ] Quote form submits (console log for demo)
- [ ] Facebook/Zalo links open correctly
- [ ] No console errors on any page

### Performance
- [ ] Page load under 3 seconds
- [ ] Images lazy loaded
- [ ] CSS/JS minified in production

---

## 10. Future Enhancements (Post-Launch)

- Add real CMS (admin panel)
- Real image gallery upload
- Client testimonials management
- Project before/after slider
- VR/360 tour integration
- Online payment for deposits
- Live chat integration

---

**Created**: 2026-08-11
**Status**: Ready for Development
**Version**: 1.0.0
