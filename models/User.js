const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');

class User extends Model {
  checkPassword(loginPassword) {
    return bcrypt.compareSync(loginPassword, this.password);
  }
}

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
    allowNull: false,
    validate: {
      len: [1],
    }
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'user', // We need to choose the model name
  freezeTableName: true, // Enforcing table name to be equal to the model name
  timestamps: false, // disable createdat/updatedat fields
  hooks: {
    beforeCreate: async (newUser) => {
      try {
        newUser.password = await bcrypt.hash(newUser.password, 10);
        return newUser;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    beforeUpdate: async (updatedUser) => {
      try {
        updatedUser.password = await bcrypt.hash(updatedUser.password, 10);
        return updatedUser;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  }
});

module.exports = User;