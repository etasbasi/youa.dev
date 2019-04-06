const Sequelize = require('sequelize');

class Profile extends Sequelize.Model {};
Profile.init({
    profilePicture_data: Sequelize.BLOB('long'),
    profilePicture_name: Sequelize.STRING,
    profilePicture_type: Sequelize.STRING,
    github: Sequelize.STRING,
    linkedin: Sequelize.STRING,
    dev: Sequelize.STRING,
    stackoverflow: Sequelize.STRING,
    biography: Sequelize.STRING
}, { sequelize });

module.exports = Profile;