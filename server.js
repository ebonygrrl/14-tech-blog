// app dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

// session middleware
const session = require('express-session');

// connect routes
const routes = require('./controllers');

// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const port = process.env.port || 3001;

const hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const sess = { 
  secret: 'process.env.SESSION_SECRET', 
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// custom middleware
const validSignUp = require('./utils/validationErrors');
app.use(validSignUp);

//sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`App is listening on port ${port}`));
//});