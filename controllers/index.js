const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// home page
router.get('/', (req, res) => {
    console.log(req.session.loggedIn);
    res.render('home', {title: 'Home | The Tech Blog', loggedIn: req.session.loggedIn});
});

// sign up page
router.get('/signup', (req, res) => {
    res.render('signup', {title: 'Sign Up | The Tech Blog'});
});

// login page
router.get('/login', (req, res) => {
    res.render('login', {title: 'Login | The Tech Blog'});
});

// all post dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {title: 'Dashboard | The Tech Blog'});
});

// new post
router.get('/dashboard/new', (req, res) => {
    res.render('new-post', {title: 'Create New Post | The Tech Blog'});
});

// edit post
router.get('/dashboard/:id/edit', (req, res) => {
    res.render('edit-post', {title: 'Edit Post | The Tech Blog'});
});

// comment on post
router.get('/post/:id', (req, res) => {
    res.render('comment', {title: 'Edit Post | The Tech Blog'});
});

// delete post
router.get('/dashboard/:id/delete', async (req, res) => {
    res.render();
});

module.exports = router;