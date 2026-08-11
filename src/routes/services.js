const express = require('express');
const router = express.Router();

const services = require('../data/services');

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Dịch vụ',
      heroTitle: 'Dịch vụ của HICONIQUE',
      heroSubtitle: 'Giải pháp toàn diện cho không gian sống đẳng cấp',
      ctaTitle: 'Bạn cần tư vấn?',
      ctaSubtitle: 'Liên hệ ngay để được hỗ trợ',
      ctaButton: 'Nhận tư vấn'
    },
    en: {
      pageTitle: 'Services',
      heroTitle: 'HICONIQUE Services',
      heroSubtitle: 'Complete solutions for prestigious living spaces',
      ctaTitle: 'Need consultation?',
      ctaSubtitle: 'Contact us for support',
      ctaButton: 'Get Consultation'
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'services',
    lang,
    t,
    services: services
  };

  res.render('pages/services', options, (err, html) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).send('Error');
    }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
