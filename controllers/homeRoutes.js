const router = require('express').Router();
const { User, Post, Comments } = require('../models');
const { Op } = require('sequelize');
const withAuth = require('../utils/auth');

// NOTE: ADD DATA ATTRIBUTE TO HANDLEBARS TO STORE POST ID. ADD VARIABLE TO RES.RENDER.

// home page
router.get('/', async (req, res) => {
    // console.log(req.session.loggedIn);

    await Post.findAll({
        include: [
            { model: User },
            { model: Comments }
        ],
        order: [['created_at', 'DESC']]
    })
    .then(async data => {
        // console.log(data);
        const posts = data.map( post => post.get({ plain: true }) );
        // console.log(posts);
        const user = await User.findOne({
            where: posts.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        // console.log(user.username);
        res.render('home', {title: 'Home | The Tech Blog', loggedIn: req.session.loggedIn, posts, user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// sign up page
router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('signup', {title: 'Sign Up | The Tech Blog'});
});

// login page
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('login', {title: 'Login | The Tech Blog'});
});

// all post dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    await Post.findAll({
        where: {user_id: req.session.userId},
        include: [
            { model: User, attributes: ['username'] },
            { model: Comments }
        ],
        order: [['created_at', 'DESC']]
    })
    .then(async data => {
        // console.log(data);
        const posts = data.map( post => post.get({ plain: true }) );
        // console.log(posts);
        const user = await User.findOne({
            where: posts.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        // console.log(user.username);
        res.render('dashboard', {title: 'Dashboard | The Tech Blog', loggedIn: req.session.loggedIn, posts, user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
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
router.get('/post/:id', withAuth, async (req, res) => {
    // post.findone by id
    //console.log(req.params.id);
    await Post.findByPk(req.params.id)
    .then(async data => {
        // console.log(data);
        const post = {
            pid: req.params.id,
            userId: data.id,
            postTitle: data.title,
            content: data.content,
            time: data.created_at
        };
        
        console.log(post);
        // const posts = data.map( post => post.get({ plain: true }) );
        const user = await User.findOne({
            where: data.user_id, // match post user id to user table id
            attributes: { exclude: ['password'] }
        });
        console.log(user.username);
        res.render('add-comment', {title: `${post.postTitle} | The Tech Blog`, loggedIn: req.session.loggedIn, post, user: user.username});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete post
router.get('/dashboard/:id/delete', withAuth, (req, res) => {
    res.render({loggedIn: req.session.loggedIn});
});

module.exports = router;