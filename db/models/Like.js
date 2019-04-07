const Sequelize = require('sequelize');
const Database = require('../Database');

const Like = Database.define({
    user_id: {
        type: Sequelize.INTEGER
    },
    post_id: {
        type: Sequelize.INTEGER
    },
    value: {
        type: Sequelize.BOOLEAN
    }
});

module.exports = Like;