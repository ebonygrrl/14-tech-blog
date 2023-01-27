const { DataTypes, Model } = require('sequelize');
const sequelize = require('../configuration/connection');

class User extends Model {}

User.init({
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User', // We need to choose the model name
  freezeTableName: true, // Enforcing table name to be equal to the model name
  timestamps: false,
  underscored: true,
});

module.exports = User;