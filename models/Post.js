const { DataTypes, Model } = require('sequelize');
const sequelize = require('../configuration/connection');

class Post extends Model {}

Post.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  time: {
    type: DataTypes.DATE,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "User",
      key: "id"
    },
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'Post', // We need to choose the model name
  freezeTableName: true, // Enforcing table name to be equal to the model name
  timestamps: false,
  underscored: true,
});

module.exports = Post;