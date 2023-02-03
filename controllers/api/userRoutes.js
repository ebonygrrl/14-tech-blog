const router = require('express').Router();
//const User = require('../../models/User');

// create new user
router.post('/signup', async (req, res) => {
  try {
  console.log("body:", req.body);
  res.status(200).json(req.body);
} catch (err) {
  console.log(err);
  res.status(500).json(err);
}
  // username: req.body.username,
  // password: req.body.password
  // await User.create(req.body)
  // .then((data) => {
  //   console.log(data)
  //   res.json(data);
  // })
  // .catch((err) => {
  //   res.status(400).json(err);
  //   console.log(err);
  // });
});

// user login
// router.post('/login', async (req, res) => {
//   await User.findOne(req.body.username)
//   .then((data) => {
//     console.log(data)
//     res.json(data);
//   })
//   .catch((err) => {
//     res.status(400).json(err);
//     console.log(err);
//   });
// });

module.exports = router;