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
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id"
    },
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull:  true
  },  
  updated_at: {
    type: DataTypes.DATE,
    allowNull:  true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'post', // We need to choose the model name
  freezeTableName: true, // Enforcing table name to be equal to the model name
  underscored: true
});

module.exports = Post;