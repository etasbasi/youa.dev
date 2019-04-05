const express = require('express');
const bodyParser = require('body-parser');
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


app.listen(process.env.SERVER_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_PORT}/`));