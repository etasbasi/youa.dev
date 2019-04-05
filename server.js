const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Route imports
const testRoute = require('./routes/test');

// Dotenv
require('dotenv').config();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.use('/api/test', testRoute);

app.listen(process.env.SERVER_PORT, () => console.log(`Server running on http://localhost:${process.env.SERVER_PORT}/`));