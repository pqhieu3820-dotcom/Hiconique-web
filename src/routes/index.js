const express = require('express');
const router = express.Router();
const path = require('path');

// Data
const projects = require('../data/projects');
const services = require('../data/services');

// Layout helper
function renderWithLayout(res, page, options) {
  const lang = options.lang || 'vi';
  res.render(page, options, (err, html) => {
    if (err) {
      console.error('Render error:', err);
      return res.status(500).send('Error rendering page');
    }
    // Read and render the layout with page content
    res.render('layout', {
      ...options,
      bodyContent: html
    });
  });
}

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      heroTitle: 'Kiến tạo sự độc bản',
      heroSubtitle: 'Nơi không gian trở thành di sản',
      heroCTA: 'Khám phá dự án',
      heroCTA2: 'Liên hệ ngay',
      servicesTitle: 'Dịch vụ của chúng tôi',
      servicesSubtitle: 'Giải pháp toàn diện cho không gian sống',
      projectsTitle: 'Dự án nổi bật',
      projectsSubtitle: 'Những công trình đáng ngưỡng mộ',
      whyTitle: 'Tại sao chọn HICONIQUE',
      whySubtitle: 'Cam kết chất lượng và sự hoàn hảo',
      ctaTitle: 'Sẵn sàng hiện thực hóa',
      ctaSubtitle: 'Hãy cùng chúng tôi kiến tạo không gian mơ ước',
      ctaButton: 'Nhận tư vấn miễn phí'
    },
    en: {
      heroTitle: 'Crafting Iconic Uniqueness',
      heroSubtitle: 'Where Space Becomes Legacy',
      heroCTA: 'Explore Projects',
      heroCTA2: 'Contact Us',
      servicesTitle: 'Our Services',
      servicesSubtitle: 'Complete solutions for living spaces',
      projectsTitle: 'Featured Projects',
      projectsSubtitle: 'Outstanding architectural works',
      whyTitle: 'Why Choose HICONIQUE',
      whySubtitle: 'Commitment to quality and perfection',
      ctaTitle: 'Ready to Realize',
      ctaSubtitle: "Let's create your dream space together",
      ctaButton: 'Get Free Consultation'
    }
  };

  const t = translations[lang];
  const featuredProjects = projects.filter(p => p.featured).slice(0, 6);
  const mainServices = services.slice(0, 6);

  const options = {
    title: 'HICONIQUE - Thiết kế và Xây dựng cao cấp',
    page: 'home',
    lang,
    t,
    projects: featuredProjects,
    services: mainServices
  };

  // First render the page, then wrap with layout
  res.render('pages/home', options, (err, html) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).send('Error');
    }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
