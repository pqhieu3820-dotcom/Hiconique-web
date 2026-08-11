const express = require('express');
const router = express.Router();

const team = require('../data/team');

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';

  const translations = {
    vi: {
      pageTitle: 'Giới thiệu',
      heroTitle: 'Về HICONIQUE',
      heroSubtitle: 'Hơn 15 năm kiến tạo không gian sang trọng',
      historyTitle: 'Lịch sử phát triển',
      historyContent: 'Được thành lập với tầm nhìn trở thành đơn vị hàng đầu trong lĩnh vực thiết kế và xây dựng cao cấp, HICONIQUE đã không ngừng phát triển và khẳng định vị trí của mình trên thị trường. Với đội ngũ kiến trúc sư và kỹ sư giàu kinh nghiệm, chúng tôi tự hào đã hoàn thành hàng trăm dự án từ biệt thự, căn hộ cao cấp đến các công trình thương mại.',
      visionTitle: 'Tầm nhìn',
      visionContent: 'Trở thành thương hiệu hàng đầu trong lĩnh vực thiết kế kiến trúc và nội thất cao cấp, mang đến những không gian sống đẳng cấp và bền vững cho khách hàng.',
      missionTitle: 'Sứ mệnh',
      missionContent: 'Mang đến cho khách hàng những giải pháp thiết kế và xây dựng toàn diện, kết hợp hài hòa giữa thẩm mỹ và chức năng, tạo ra những công trình có giá trị vượt thời gian.',
      valuesTitle: 'Giá trị cốt lõi',
      values: [
        { title: 'Chất lượng', desc: 'Cam kết tuyệt đối về chất lượng công trình' },
        { title: 'Sáng tạo', desc: 'Không ngừng đổi mới trong thiết kế' },
        { title: 'Tận tâm', desc: 'Lắng nghe và đáp ứng mọi nhu cầu khách hàng' },
        { title: 'Chuyên nghiệp', desc: 'Quy trình làm việc chuyên nghiệp, minh bạch' }
      ],
      teamTitle: 'Đội ngũ của chúng tôi',
      teamSubtitle: 'Gặp gỡ những người sáng tạo ra HICONIQUE'
    },
    en: {
      pageTitle: 'About Us',
      heroTitle: 'About HICONIQUE',
      heroSubtitle: 'Over 15 years crafting luxury spaces',
      historyTitle: 'Our History',
      historyContent: 'Founded with the vision of becoming a leading provider in luxury design and construction, HICONIQUE has continuously grown and asserted its position in the market. With a team of experienced architects and engineers, we are proud to have completed hundreds of projects from luxury villas and apartments to commercial buildings.',
      visionTitle: 'Vision',
      visionContent: 'To become the leading brand in luxury architectural and interior design, delivering prestigious and sustainable living spaces to customers.',
      missionTitle: 'Mission',
      missionContent: 'Provide customers with comprehensive design and construction solutions, harmoniously combining aesthetics and functionality to create timeless architectural works.',
      valuesTitle: 'Core Values',
      values: [
        { title: 'Quality', desc: 'Absolute commitment to construction quality' },
        { title: 'Creativity', desc: 'Continuous innovation in design' },
        { title: 'Dedication', desc: 'Listening and meeting all customer needs' },
        { title: 'Professionalism', desc: 'Professional, transparent workflow' }
      ],
      teamTitle: 'Our Team',
      teamSubtitle: 'Meet the creators of HICONIQUE'
    }
  };

  const t = translations[lang];
  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'about',
    lang,
    t,
    team: team.slice(0, 4)
  };

  res.render('pages/about', options, (err, html) => {
    if (err) {
      console.error('Error:', err);
      return res.status(500).send('Error');
    }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
