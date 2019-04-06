const express = require('express');
const bodyParser = require('body-parser');

// App
const app = express();

// Route imports
const testRoute = require('./routes/test');
const authRoute = require('./routes/auth');
const profileRoute = require('./routes/profile');

// Dotenv
require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/test', testRoute);
app.use('/api/auth', authRoute);
app.use('/api/profile', profileRoute);

// Database
const Database = require('./db/Database');
Database.authenticate()
    .then(() => console.log('Database connection established.'))
    .catch(err => console.error('Connection refused. Error: ', err));

// Database.sync({ force: true })
//     .then(() => 'Sync.')
//     .catch(err => console.error('Sync Error: ', err));

// Server Init
app.listen(process.env.SERVER_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_PORT}/`));