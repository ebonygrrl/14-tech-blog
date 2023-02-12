const Post = require('../models/Post');

const postData = [
  {
    title: 'Test Post',
    content: 'This is a test.',
    user_id: 1
  },
  {
    title: 'Test Post 2',
    content: 'This is another test.',
    user_id: 2
  }
 
];

const seedPosts = () => Post.bulkCreate(postData,  {individualHooks: true});

module.exports = seedPosts;
