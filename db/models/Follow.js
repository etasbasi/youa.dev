const Sequelize = require('sequelize');
const Database = require('../Database');

const Follow = Database.define('Follow', {
    user_id: {
        type: Sequelize.INTEGER
    },
    followed_user_id: {
        type: Sequelize.INTEGER
    }
});

module.exports = Follow;