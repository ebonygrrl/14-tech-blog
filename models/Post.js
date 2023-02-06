const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id'
    },
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'post', // We need to choose the model name
  freezeTableName: true, // Enforcing table name to be equal to the model name
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

module.exports = Post;