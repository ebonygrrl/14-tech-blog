const router = require('express').Router();
const { User, Post, Comments } = require('../../models');

// create new comment
router.post('/new', async (req, res) => {
  await User.create(req.body)
  .then((data) => {
    console.log(data)
    res.json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err);
  });
});

module.exports = router;