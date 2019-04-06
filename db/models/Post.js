const Sequelize = require('sequelize');
const Database = require('../Database');

const Post = Database.define('Post', {
    user_id: {
        type: Sequelize.INTEGER
    },
    title: {
        type: Sequelize.STRING
    },
    body: {
        type: Sequelize.STRING
    },
    comments: {
        type: Sequelize.HSTORE
    },
    likes: {
        type: Sequelize.INTEGER
    }
})

module.exports = Post;