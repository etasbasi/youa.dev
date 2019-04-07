const Sequelize = require('sequelize');
const Database = require('../Database');

const User = Database.define('User', {
    type: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    verified: {
        type: Sequelize.BOOLEAN
    }
})

module.exports = User;