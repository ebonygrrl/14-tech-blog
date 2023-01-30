// app dependencies
const express = require('express');

// import sequelize connection
const sequelize = require('./configuration/connection');
const port = process.env.port || 3001;

// connect routes
const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});