const router = require('express').Router();
const { User } = require('../../models');

// validation middleware
const validationErrors = require('../../utils/validationErrors');

// create new user
router.post('/signup', async (req, res) => {

  await User.create(req.body)
    .then((data) => {     

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = data.id;
        res.status(200).json(data);
      });
      
    })
    .catch((err) => {
      const errors = validationErrors(err);
      if (errors) {
        res.status(422).json(errors);
      }
    });
});

// user login
router.post('/login', async (req, res) => {
  
  await User.findOne({
    where: { username: req.body.username }
  })
    .then((data) => {
      // console.log(data);
      if(data === null) {
        res.status(400).json({ message: 'You have entered the wrong username or password. Please try again!' });
        return;
      } 
  
      const validPassword = data.checkPassword(req.body.password);
      
      if (!validPassword) {
        res.status(400).json({ message: 'You have entered the wrong username or password. Please try again!' });  
        return;
      } 

      req.session.save(() => {
        req.session.loggedIn = true;
        req.session.userId = data.id;  
        res.status(200).json({ user: data, message: 'You are now logged in!' });
      });
    })
    .catch((err) => {
      res.status(400).json(err);
      console.log(err);
    });
});

// 
router.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('Logout successful')
      }
    });
  } else {
    res.end()
  }
});

// wildcard
router.get('/*', (req, res) => {
    res.redirect('/');
});

module.exports = router;