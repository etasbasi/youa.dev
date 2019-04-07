const Sequelize = require('sequelize');
const Database = require('../Database');

const Report = Database.define('Report', {
    user_id: {
        type: Sequelize.INTEGER
    },
    reported_user_id: {
        type: Sequelize.INTEGER
    },
    reason: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
})

module.exports = Report;