const express = require('express');
const router = express.Router();

const projects = require('../data/projects');

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';
  const category = req.query.category || 'all';

  const translations = {
    vi: {
      pageTitle: 'Dự án',
      heroTitle: 'Dự án của HICONIQUE',
      heroSubtitle: 'Những công trình chúng tôi tự hào hoàn thành',
      filterAll: 'Tất cả',
      filterVilla: 'Biệt thự',
      filterApartment: 'Căn hộ',
      filterOffice: 'Văn phòng',
      filterRestaurant: 'Nhà hàng',
      filterHotel: 'Khách sạn',
      filterRetail: 'Showroom',
      viewDetail: 'Xem chi tiết',
      ctaTitle: 'Bạn có dự án cần thực hiện?',
      ctaSubtitle: 'Hãy cùng chúng tôi tạo nên công trình của riêng bạn',
      ctaButton: 'Nhận báo giá'
    },
    en: {
      pageTitle: 'Projects',
      heroTitle: 'HICONIQUE Projects',
      heroSubtitle: 'Projects we are proud to complete',
      filterAll: 'All',
      filterVilla: 'Villa',
      filterApartment: 'Apartment',
      filterOffice: 'Office',
      filterRestaurant: 'Restaurant',
      filterHotel: 'Hotel',
      filterRetail: 'Showroom',
      viewDetail: 'View Details',
      ctaTitle: 'Do you have a project?',
      ctaSubtitle: "Let's create your own project together",
      ctaButton: 'Get Quote'
    }
  };

  const t = translations[lang];
  const filteredProjects = category === 'all'
    ? projects
    : projects.filter(p => p.category === category);

  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'projects',
    lang,
    t,
    projects: filteredProjects,
    currentCategory: category
  };

  res.render('pages/projects', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

router.get('/:slug', (req, res) => {
  const lang = req.query.lang || 'vi';
  const slug = req.params.slug;
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return res.status(404).render('pages/404', {
      title: '404 - Không tìm thấy',
      page: '404',
      lang
    });
  }

  const translations = {
    vi: {
      client: 'Khách hàng',
      location: 'Địa điểm',
      year: 'Năm',
      area: 'Diện tích',
      services: 'Dịch vụ',
      description: 'Mô tả',
      relatedProjects: 'Dự án liên quan',
      ctaTitle: 'Bạn quan tâm dự án này?',
      ctaButton: 'Liên hệ tư vấn'
    },
    en: {
      client: 'Client',
      location: 'Location',
      year: 'Year',
      area: 'Area',
      services: 'Services',
      description: 'Description',
      relatedProjects: 'Related Projects',
      ctaTitle: 'Interested in this project?',
      ctaButton: 'Contact for Consultation'
    }
  };

  const t = translations[lang];
  const relatedProjects = projects
    .filter(p => p.category === project.category && p.slug !== slug)
    .slice(0, 3);

  const options = {
    title: `${project.name[lang]} - HICONIQUE`,
    page: 'projects',
    lang,
    t,
    project,
    relatedProjects
  };

  res.render('pages/project-detail', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
