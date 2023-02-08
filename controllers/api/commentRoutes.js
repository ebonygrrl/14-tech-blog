const router = require('express').Router();
const { User, Post, Comments } = require('../../models');

// create new comment
router.post('/new', async (req, res) => {
  console.log(req.body, 'break', req.session);

  const comment = {
    post_id: req.body.post_id,
    comment: req.body.comment,
    user_id: req.session.userId,
  };
  await Comments.create(comment)
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