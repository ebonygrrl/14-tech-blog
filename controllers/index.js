const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('home', {title: 'Home | The Tech Blog'});
});

router.get('/signup', (req, res) => {
    res.render('signup', {title: 'Sign Up | The Tech Blog'});
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login | The Tech Blog'});
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard', {title: 'Dashboard | The Tech Blog'});
});

router.get('/dashboard/new', (req, res) => {
    res.render('new-post', {title: 'Create New Post | The Tech Blog'});
});

router.get('/dashboard/edit', (req, res) => {
    res.render('edit-post', {title: 'Edit Post | The Tech Blog'});
});

router.get('/post/:id', (req, res) => {
    res.render('comment', {title: 'Edit Post | The Tech Blog'});
});

module.exports = router;