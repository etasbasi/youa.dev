const Sequelize = require('sequelize');
const Database = require('../Database');

const User = Database.define('User', {
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})

module.exports = User;