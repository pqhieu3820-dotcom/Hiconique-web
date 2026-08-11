const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Liên hệ',
      heroTitle: 'Liên hệ HICONIQUE',
      heroSubtitle: 'Chúng tôi luôn sẵn sàng lắng nghe',
      formTitle: 'Gửi tin nhắn',
      formName: 'Họ và tên',
      formEmail: 'Email',
      formPhone: 'Số điện thoại',
      formSubject: 'Chủ đề',
      formMessage: 'Nội dung tin nhắn',
      formSubmit: 'Gửi tin nhắn',
      infoTitle: 'Thông tin liên hệ',
      address: 'Địa chỉ',
      phone: 'Điện thoại',
      email: 'Email',
      workingHours: 'Giờ làm việc',
      workingHoursText: 'Thứ 2 - Thứ 7: 8:00 - 18:00'
    },
    en: {
      pageTitle: 'Contact',
      heroTitle: 'Contact HICONIQUE',
      heroSubtitle: 'We are always ready to listen',
      formTitle: 'Send Message',
      formName: 'Full Name',
      formEmail: 'Email',
      formPhone: 'Phone Number',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      infoTitle: 'Contact Information',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      workingHours: 'Working Hours',
      workingHoursText: 'Mon - Sat: 8:00 AM - 6:00 PM'
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'contact',
    lang,
    t
  };

  res.render('pages/contact', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

router.post('/', (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  console.log('=== Contact Form ===', { name, email, phone, subject, message });
  res.json({ success: true, message: 'Thank you! Message sent.' });
});

module.exports = router;
