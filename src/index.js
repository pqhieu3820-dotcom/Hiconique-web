require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security & Performance
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(compression());

// View Engine
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, 'views/pages'),
  path.join(__dirname, 'views')
]);

// Static Files
app.use(express.static(path.join(__dirname, '../public')));

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View locals
app.use((req, res, next) => {
  res.locals.lang = req.query.lang || 'vi';
  res.locals.currentYear = new Date().getFullYear();
  next();
});

// Routes
app.use('/', require('./routes/index'));
app.use('/about', require('./routes/about'));
app.use('/services', require('./routes/services'));
app.use('/projects', require('./routes/projects'));
app.use('/blog', require('./routes/blog'));
app.use('/process', require('./routes/process'));
app.use('/team', require('./routes/team'));
app.use('/contact', require('./routes/contact'));
app.use('/quote', require('./routes/quote'));
app.use('/faq', require('./routes/faq'));

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - Trang không tìm thấy',
    page: '404',
    lang: res.locals.lang
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', {
    title: '500 - Lỗi server',
    page: '500',
    lang: res.locals.lang
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 HICONIQUE Website running at http://localhost:${PORT}`);
  console.log(`📁 Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;
