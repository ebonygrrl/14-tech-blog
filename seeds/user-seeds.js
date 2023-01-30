const User = require('../models/User');

const userData = [
  {
    username: 'simonalvin',
    password: 'password'
  },
  {
    username: 'alvinsimon',
    password: 'password'
  },
 
];

const seedUsers = () => User.bulkCreate(userData,  {individualHooks: true});

module.exports = seedUsers;
