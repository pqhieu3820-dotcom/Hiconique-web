const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Báo giá',
      heroTitle: 'Yêu cầu báo giá',
      heroSubtitle: 'Nhận báo giá chi tiết trong 24h',
      formTitle: 'Thông tin dự án',
      formName: 'Họ và tên *',
      formEmail: 'Email *',
      formPhone: 'Số điện thoại *',
      formService: 'Dịch vụ quan tâm',
      formProjectType: 'Loại công trình',
      formLocation: 'Địa điểm',
      formArea: 'Diện tích (m²)',
      formBudget: 'Ngân sách dự kiến',
      formTimeline: 'Thời gian mong muốn',
      formDetails: 'Chi tiết dự án',
      formDetailsPlaceholder: 'Mô tả chi tiết về dự án...',
      formSubmit: 'Gửi yêu cầu',
      services: ['Thiết kế kiến trúc', 'Thiết kế nội thất', 'Thi công xây dựng', 'Cải tạo và nâng cấp', 'Thiết kế và thi công trọn gói', 'Tư vấn giám sát'],
      projectTypes: ['Biệt thự', 'Căn hộ cao cấp', 'Nhà phố', 'Văn phòng', 'Showroom', 'Nhà hàng', 'Khách sạn', 'Khác'],
      budgets: ['Dưới 500 triệu', '500 triệu - 1 tỷ', '1 - 2 tỷ', '2 - 5 tỷ', '5 - 10 tỷ', 'Trên 10 tỷ', 'Chưa xác định'],
      timelines: ['Càng sớm càng tốt', 'Trong 1 tháng', 'Trong 3 tháng', 'Trong 6 tháng', 'Chưa xác định']
    },
    en: {
      pageTitle: 'Quote',
      heroTitle: 'Request a Quote',
      heroSubtitle: 'Get detailed quote within 24 hours',
      formTitle: 'Project Information',
      formName: 'Full Name *',
      formEmail: 'Email *',
      formPhone: 'Phone Number *',
      formService: 'Interested Service',
      formProjectType: 'Project Type',
      formLocation: 'Location',
      formArea: 'Area (m²)',
      formBudget: 'Estimated Budget',
      formTimeline: 'Desired Timeline',
      formDetails: 'Project Details',
      formDetailsPlaceholder: 'Describe your project...',
      formSubmit: 'Submit Request',
      services: ['Architectural Design', 'Interior Design', 'Construction', 'Renovation', 'Design & Build', 'Consulting'],
      projectTypes: ['Villa', 'Luxury Apartment', 'Townhouse', 'Office', 'Showroom', 'Restaurant', 'Hotel', 'Other'],
      budgets: ['Under 500M VND', '500M - 1B VND', '1 - 2B VND', '2 - 5B VND', '5 - 10B VND', 'Over 10B VND', 'Undetermined'],
      timelines: ['As soon as possible', 'Within 1 month', 'Within 3 months', 'Within 6 months', 'Undetermined']
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'quote',
    lang,
    t
  };

  res.render('pages/quote', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

router.post('/', (req, res) => {
  console.log('=== Quote Request ===', req.body);
  res.json({ success: true, message: 'Quote request submitted!' });
});

module.exports = router;
