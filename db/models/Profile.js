const Sequelize = require('sequelize');
const Database = require('../Database');

const Profile = Database.define('Profile', {
    user_id: { type: Sequelize.INTEGER },
    profilePicture_data: { type: Sequelize.BLOB('long') },
    profilePicture_name: { type: Sequelize.STRING },
    profilePicture_type: { type: Sequelize.STRING },
    github: { type: Sequelize.STRING },
    linkedin: { type: Sequelize.STRING },
    dev: { type: Sequelize.STRING },
    stackoverflow: { type: Sequelize.STRING },
    biography: { type: Sequelize.STRING }
});

module.exports = Profile;