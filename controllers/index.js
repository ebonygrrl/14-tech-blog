const router = require('express').Router();
const apiRoutes = require('./api');
const { User, Post, Comments } = require('../models');
const withAuth = require('../utils/auth');

router.use('/api', apiRoutes);

// home page
router.get('/', (req, res) => {
    // console.log(req.session.loggedIn);
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
router.get('/dashboard', withAuth, async (req, res) => {
    await Post.findAll({
        include: [
            { model: User, attributes: ['username'] },
            { model: Comments }
        ],
        order: [['created_at', 'DESC']]
    })
    .then(data => {
        console.log(data);
        const posts = data.map( post => post.get({ plain: true }) );
        res.render('dashboard', {title: 'Dashboard | The Tech Blog', loggedIn: req.session.loggedIn, posts});
    });
});

// new post
router.get('/dashboard/post/new', withAuth, (req, res) => {
    res.render('new-post', {title: 'Create New Post | The Tech Blog', loggedIn: req.session.loggedIn});
});

// edit post
router.get('/dashboard/post/:id/edit', withAuth, (req, res) => {
    res.render('edit-post', {title: 'Edit Post | The Tech Blog', loggedIn: req.session.loggedIn});
});

// comment on post
router.get('/post/:id', withAuth, (req, res) => {
    res.render('comment', {title: 'Edit Post | The Tech Blog', loggedIn: req.session.loggedIn});
});

// delete post
router.get('/dashboard/:id/delete', withAuth, (req, res) => {
    res.render({loggedIn: req.session.loggedIn});
});

// logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// wildcard
router.get('*', (req, res) => {
    res.redirect('/');
});

module.exports = router;