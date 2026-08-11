const express = require('express');
const router = express.Router();

const blogPosts = require('../data/blog');

router.get('/', (req, res) => {
  const lang = req.query.lang || 'vi';
  const category = req.query.category || 'all';
  const page = parseInt(req.query.page) || 1;
  const perPage = 6;

  const translations = {
    vi: {
      pageTitle: 'Tin tức',
      heroTitle: 'Tin tức & Xu hướng',
      heroSubtitle: 'Cập nhật những xu hướng thiết kế mới nhất',
      filterAll: 'Tất cả',
      filterNews: 'Tin tức',
      filterDesign: 'Thiết kế',
      filterTips: 'Mẹo hay',
      filterTrends: 'Xu hướng',
      readMore: 'Đọc tiếp',
      relatedTitle: 'Bài viết liên quan',
      searchPlaceholder: 'Tìm kiếm bài viết...'
    },
    en: {
      pageTitle: 'News',
      heroTitle: 'News & Trends',
      heroSubtitle: 'Latest design trends and updates',
      filterAll: 'All',
      filterNews: 'News',
      filterDesign: 'Design',
      filterTips: 'Tips',
      filterTrends: 'Trends',
      readMore: 'Read More',
      relatedTitle: 'Related Articles',
      searchPlaceholder: 'Search articles...'
    }
  };

  const t = translations[lang];
  let filteredPosts = category === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === category);

  const totalPages = Math.ceil(filteredPosts.length / perPage);
  const startIndex = (page - 1) * perPage;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + perPage);

  const options = {
    title: `${t.pageTitle} - HICONIQUE`,
    page: 'blog',
    lang,
    t,
    posts: paginatedPosts,
    currentCategory: category,
    currentPage: page,
    totalPages,
    categories: ['all', 'news', 'design', 'tips', 'trends']
  };

  res.render('pages/blog', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

router.get('/:slug', (req, res) => {
  const lang = req.query.lang || 'vi';
  const slug = req.params.slug;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return res.status(404).render('pages/404', {
      title: '404 - Không tìm thấy',
      page: '404',
      lang
    });
  }

  const translations = {
    vi: {
      date: 'Ngày đăng',
      author: 'Tác giả',
      category: 'Danh mục',
      relatedTitle: 'Bài viết liên quan',
      share: 'Chia sẻ'
    },
    en: {
      date: 'Published',
      author: 'Author',
      category: 'Category',
      relatedTitle: 'Related Articles',
      share: 'Share'
    }
  };

  const t = translations[lang];
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.slug !== slug)
    .slice(0, 3);

  const options = {
    title: `${post.title[lang]} - HICONIQUE`,
    page: 'blog',
    lang,
    t,
    post,
    relatedPosts
  };

  res.render('pages/blog-detail', options, (err, html) => {
    if (err) { console.error('Error:', err); return res.status(500).send('Error'); }
    res.render('layout', { ...options, bodyContent: html });
  });
});

module.exports = router;
