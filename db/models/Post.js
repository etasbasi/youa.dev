const Sequelize = require('sequelize');
const Database = require('../Database');

const Post = Database.define('Post', {
    user_id: {
        type: Sequelize.INTEGER
    },
    handle: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    }
})

module.exports = Post;