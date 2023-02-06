require('dotenv').config();
const parser = require('moment-parseplus');
const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        //useUTC: false, //for reading from database
        dateStrings: true,
      },
      timezone: '+05:30' //for writing to database
    });

module.exports = sequelize;