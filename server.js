const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config/config');

// App
const app = express();

// Route imports
const testRoute = require('./routes/test');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');
const postsRoute = require('./routes/posts');
const supportRoute = require('./routes/support');

// Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/test', testRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);
app.use('/api/posts', postsRoute);
app.use('/api/support', supportRoute);


// Database
const Database = require('./db/Database');
Database.authenticate()
    .then(() => console.log('Database connection established.'))
    .catch(err => console.error('Connection refused. Error: ', err));

// Server Init
app.listen(config.SERVER_PORT, () => console.log(`Server running on http://localhost:${config.SERVER_PORT}/`));