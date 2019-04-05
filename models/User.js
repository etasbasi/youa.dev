const Sequelize = require('sequelize');

class User extends Sequelize.Model {};
User.init({
    email: Sequelize.STRING,
    password: Sequelize.STRING
}, { sequelize });

module.exports = User;