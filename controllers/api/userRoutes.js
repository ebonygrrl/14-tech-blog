const router = require('express').Router();
const { User } = require('../../models');
const validSignUp = require('../../utils/validationErrors');

// create new user
router.post('/signup', async (req, res) => {

  await User.create(req.body)
    .then((data) => {
      
      console.log(data);
      res.status(200).json(data.message);
    })
    .catch(validSignUp, (err) => {
      console.log(err);
    });
});

//user login
router.post('/login', async (req, res) => {
  
  await User.findOne({
    where: { username: req.body.username }
  })
    .then((data) => {
      if(data === null) {
        res.status(400).json({ message: 'You have entered the wrong username or password. Please try again!' });
        return;
      } 
  
      const validPassword = data.checkPassword(req.body.password);
      
      if (!validPassword) {
        res.status(400).json({ message: 'You have entered the wrong username or password. Please try again!' });  
        return;
      } 

      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });

    return false;
});

module.exports = router;