const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Câu hỏi thường gặp',
      heroTitle: 'Câu hỏi thường gặp',
      heroSubtitle: 'Giải đáp những thắc mắc phổ biến',
      faqs: [
        { question: 'Thời gian thiết kế và thi công trung bình là bao lâu?', answer: 'Thời gian phụ thuộc vào quy mô và độ phức tạp của công trình. Thông thường: thiết kế mất 2-4 tuần, thi công biệt thự/căn hộ 2-6 tháng, công trình thương mại 3-9 tháng.' },
        { question: 'HICONIQUE có bảo hành công trình không?', answer: 'Chúng tôi cam kết bảo hành 12-24 tháng cho tất cả các hạng mục thi công. Bảo hành bao gồm sửa chữa các lỗi kỹ thuật, vật liệu hỏng do thi công.' },
        { question: 'Chi phí thiết kế được tính như thế nào?', answer: 'Chi phí thiết kế được tính theo m2 hoặc % giá trị công trình tùy theo loại hình. Chúng tôi sẽ báo giá cụ thể sau khi khảo sát và hiểu rõ yêu cầu của quý khách.' },
        { question: 'Tôi có được xem trước thiết kế 3D không?', answer: 'Có, chúng tôi cung cấp hình ảnh 3D, phối cảnh và walkthrough để quý khách hình dung công trình trước khi thi công.' },
        { question: 'HICONIQUE có hỗ trợ thiết kế theo phong cách yêu cầu không?', answer: 'Hoàn toàn có. Đội ngũ kiến trúc sư của chúng tôi có kinh nghiệm đa dạng các phong cách từ hiện đại, cổ điển, tối giản đến fusion.' },
        { question: 'Làm thế nào để theo dõi tiến độ thi công?', answer: 'Chúng tôi cập nhật tiến độ hàng tuần qua hình ảnh, video và báo cáo. Quý khách cũng có thể đến kiểm tra trực tiếp bất cứ lúc nào.' }
      ]
    },
    en: {
      pageTitle: 'FAQ',
      heroTitle: 'Frequently Asked Questions',
      heroSubtitle: 'Answers to common questions',
      faqs: [
        { question: 'How long does design and construction take?', answer: 'Duration depends on project scale and complexity. Typically: design takes 2-4 weeks, villa/apartment construction 2-6 months, commercial projects 3-9 months.' },
        { question: 'Does HICONIQUE provide warranty?', answer: 'We offer 12-24 months warranty for all construction items. Warranty includes repair of technical errors and material defects.' },
        { question: 'How is design cost calculated?', answer: 'Design cost is calculated per m2 or as a percentage of project value depending on type.' },
        { question: 'Can I see 3D design before construction?', answer: 'Yes, we provide 3D images, renderings and walkthroughs so you can visualize the project before construction.' },
        { question: 'Does HICONIQUE design according to specific styles?', answer: 'Absolutely. Our architects have experience with diverse styles from modern, classic, minimalist to fusion.' },
        { question: 'How can I track construction progress?', answer: 'We update progress weekly through images, videos and reports. You can also visit for inspection anytime.' }
      ]
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'faq',
    lang,
    t
  };

  res.render('pages/faq', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
