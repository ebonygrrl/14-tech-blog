const Post = require('../models/Post');

const postData = [
  {
    content: 'This is a test.',
    time: '2003-12-31 12:00:00',
    user_id: 1
  },
  {
    content: 'This is another test.',
    time: '2001-12-31 12:00:00',
    user_id: 2
  }
 
];

const seedPosts = () => Post.bulkCreate(postData,  {individualHooks: true});

module.exports = seedPosts;
