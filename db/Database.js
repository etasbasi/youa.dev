const Sequelize = require('sequelize');

// Dotenv
require('dotenv').config();

// Sequelize
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER_NAME, process.env.DB_USER_PASSWORD, 
    { 
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
);
