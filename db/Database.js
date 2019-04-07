const Sequelize = require('sequelize');
const config = require('../config/config');

// Sequelize
module.exports = new Sequelize(config.DB_NAME, config.DB_USER_NAME, config.DB_USER_PASSWORD, {
    dialect: 'postgres',
    host: config.DB_HOST,
    port: config.DB_PORT
});