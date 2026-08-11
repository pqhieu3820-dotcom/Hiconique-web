const express = require('express');
const router = express.Router();

const team = require('../data/team');

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Đội ngũ',
      heroTitle: 'Đội ngũ HICONIQUE',
      heroSubtitle: 'Những kiến trúc sư và kỹ sư tài năng'
    },
    en: {
      pageTitle: 'Team',
      heroTitle: 'HICONIQUE Team',
      heroSubtitle: 'Talented architects and engineers'
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'team',
    lang,
    t,
    team: team
  };

  res.render('pages/team', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
