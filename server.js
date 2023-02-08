// app dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

// session middleware
const session = require('express-session');

// initalize sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// connect routes
const routes = require('./controllers');

// import sequelize connection
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const port = process.env.port || 3001;

const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const myStore = new SequelizeStore({
  db: sequelize,
});

const sess = { 
  secret: 'process.env.SESSION_SECRET', 
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 86400000, // 30 * (24 * 60 * 60 * 1000) = 30 * 86400000 => session is stored 30 days
  }, //{ maxAge: 3600000 },
  store: myStore
};

app.use(session(sess));
myStore.sync();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => console.log(`App is listening on port ${port}`));
});