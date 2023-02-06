const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');

class Comments extends Model {}

Comments.init({
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
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "post",
      key: "id"
    },
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'comments', // We need to choose the model name
  freezeTableName: true, // Enforcing table name to be equal to the model name
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false
});

module.exports = Comments;