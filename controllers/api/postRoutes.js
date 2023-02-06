const router = require('express').Router();
const { Post } = require('../../models');

// create new post
router.post('/new', async (req, res) => {
  // get user id from session
  console.log(req.body, req.session);

  await Post.create(req.body)
  .then((data) => {
    console.log(data)
    res.json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err);
  });
});

// update post
router.put('/:id/update', async (req, res) => {
  // get user id from session

  await Post.create(req.body)
  .then((data) => {
    console.log(data)
    res.json(data);
  })
  .catch((err) => {
    res.status(400).json(err);
    console.log(err);
  });
});

// delete post
router.post('/:id/delete', async (req, res) => {
  // get user id from session

  await Post.create(req.body)
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