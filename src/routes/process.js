const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Quy trình',
      heroTitle: 'Quy trình làm việc',
      heroSubtitle: '6 bước chuyên nghiệp để hiện thực hóa dự án của bạn',
      steps: [
        { number: '01', title: 'Tiếp nhận & Tư vấn', description: 'Chúng tôi lắng nghe nhu cầu, mong muốn và ngân sách của bạn để đưa ra giải pháp phù hợp nhất.', duration: '1-2 ngày' },
        { number: '02', title: 'Khảo sát & Đo đạc', description: 'Đội ngũ kỹ sư đến khảo sát thực tế, đo đạc chi tiết không gian và điều kiện xây dựng.', duration: '2-3 ngày' },
        { number: '03', title: 'Thiết kế Concept', description: 'Kiến trúc sư xây dựng ý tưởng thiết kế, phối cảnh 3D và bản vẽ sơ bộ cho bạn xem trước.', duration: '7-14 ngày' },
        { number: '04', title: 'Hoàn thiện Thiết kế', description: 'Sau khi duyệt concept, chúng tôi hoàn thiện bản vẽ chi tiết, kỹ thuật và dự toán chi phí.', duration: '10-20 ngày' },
        { number: '05', title: 'Thi công', description: 'Đội ngũ thi công chuyên nghiệp thực hiện theo đúng tiến độ và chất lượng cam kết.', duration: '30-90 ngày' },
        { number: '06', title: 'Bàn giao & Bảo hành', description: 'Nghiệm thu công trình, bàn giao đầy đủ hồ sơ và cam kết bảo hành dài hạn.', duration: '1-2 ngày' }
      ],
      ctaTitle: 'Sẵn sàng bắt đầu?',
      ctaSubtitle: 'Hãy liên hệ ngay để được tư vấn miễn phí',
      ctaButton: 'Liên hệ tư vấn'
    },
    en: {
      pageTitle: 'Process',
      heroTitle: 'Working Process',
      heroSubtitle: '6 professional steps to realize your project',
      steps: [
        { number: '01', title: 'Consultation', description: 'We listen to your needs, desires and budget to provide the most suitable solutions.', duration: '1-2 days' },
        { number: '02', title: 'Survey & Measurement', description: 'Our engineering team conducts on-site surveys, detailed measurements and construction conditions.', duration: '2-3 days' },
        { number: '03', title: 'Concept Design', description: 'Architects develop design concepts, 3D renderings and preliminary drawings for your review.', duration: '7-14 days' },
        { number: '04', title: 'Final Design', description: 'After concept approval, we finalize detailed drawings, technical specifications and cost estimates.', duration: '10-20 days' },
        { number: '05', title: 'Construction', description: 'Professional construction team executes the project with guaranteed quality and timeline.', duration: '30-90 days' },
        { number: '06', title: 'Handover & Warranty', description: 'Project acceptance, complete document handover and long-term warranty commitment.', duration: '1-2 days' }
      ],
      ctaTitle: 'Ready to start?',
      ctaSubtitle: 'Contact us for a free consultation',
      ctaButton: 'Contact Now'
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'process',
    lang,
    t
  };

  res.render('pages/process', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
