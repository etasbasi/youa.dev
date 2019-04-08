const Sequelize = require('sequelize');
const Database = require('../Database');

const Ticket = Database.define('Ticket', {
    user_id: {
        type: Sequelize.INTEGER
    },
    subject: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    resolved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
});

module.exports = Ticket;