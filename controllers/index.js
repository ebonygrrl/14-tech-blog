const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
    res.render('home');
    // try {
    //     res.status(200).json('message: home');
    // } catch (err) {
    //     res.status(400).json(err);
    // }
});

module.exports = router;