const Comments = require('../models/Comments');

const commentData = [
  {
    content: 'This is a comment test.',
    user_id: 1,
    post_id: 1
  }
 
];

const seedComments = () => Comments.bulkCreate(commentData,  {individualHooks: true});

module.exports = seedComments;
