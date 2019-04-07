const Sequelize = require('sequelize');
const Database = require('../Database');

const Comment = Database.define({
    user_id: {
        type: Sequelize.INTEGER
    },
    post_id: {
        type: Sequelize.INTEGER
    },
    body: {
        type: Sequelize.INTEGER
    }
});

module.exports = Comment;