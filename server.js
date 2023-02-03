// app dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

// connect routes
const routes = require('./controllers');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const port = process.env.port || 3001;

const hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

//sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`App is listening on port ${port}`));
//});