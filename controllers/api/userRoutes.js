const router = require('express').Router();
const User = require('../../models/User');

// create new user
router.post('/signup', async (req, res) => {
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

// user login
router.post('/signin', async (req, res) => {
  await User.findOne(req.body.username)
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