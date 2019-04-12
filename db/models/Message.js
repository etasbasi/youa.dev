const Sequelize = require("sequelize");
const Database = require("../Database");

const Message = Database.define("Message", {
  user_id: {
    type: Sequelize.INTEGER
  },
  recipient_user_id: {
    type: Sequelize.INTEGER
  },
  body: {
    type: Sequelize.STRING
  }
});

module.exports = Message;
