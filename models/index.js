const User = require('./User');
const Post = require('./Post');
const Comments = require('./Comments');

User.hasMany(Post);
User.hasMany(Comments);

Post.belongsTo(User, { foreignKey: 'user_id' });
Post.hasMany(Comments);

Comments.belongsTo(User, { foreignKey: 'user_id' });
Comments.belongsTo(Post, { foreignKey: 'post_id' });

module.exports = { User, Post, Comments };