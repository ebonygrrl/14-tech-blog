// app dependencies
const express = require('express');

// import sequelize connection
const sequelize = require('./configuration/connection');
const port = process.env.port || 3001;


const app = express();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});