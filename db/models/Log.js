const Sequelize = require('sequelize');
const Database = require('../Database');

const Log = Database.define('Log', {
    data: {
        type: Sequelize.JSON
    }
});

module.exports = Log;