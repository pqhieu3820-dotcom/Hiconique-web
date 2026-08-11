const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Security & Performance
app.use(helmet({
  contentSecurityPolicy: false
}));
app.use(compression());

// View Engine
app.set('view engine', 'ejs');
app.set('views', [
  path.join(__dirname, '..', 'src', 'views', 'pages'),
  path.join(__dirname, '..', 'src', 'views')
]);

// Static Files
app.use(express.static(path.join(__dirname, '..', 'public')));

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
app.use('/', require('../src/routes/index'));
app.use('/about', require('../src/routes/about'));
app.use('/services', require('../src/routes/services'));
app.use('/projects', require('../src/routes/projects'));
app.use('/blog', require('../src/routes/blog'));
app.use('/process', require('../src/routes/process'));
app.use('/team', require('../src/routes/team'));
app.use('/contact', require('../src/routes/contact'));
app.use('/quote', require('../src/routes/quote'));
app.use('/faq', require('../src/routes/faq'));

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

module.exports = app;
