const router = require('express').Router();

const userRoutes = require('./userRoutes');
router.use('/user', userRoutes);

const postRoutes = require('./postRoutes');
router.use('/dashboard', postRoutes);

const commentRoutes = require('./commentRoutes');
router.use('/comment', commentRoutes);

module.exports = router;