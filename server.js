const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const config = require("./config/config");

// App
const app = express();

// Route imports
const testRoute = require("./routes/test");
const authRoute = require("./routes/auth");
const profileRoute = require("./routes/profile");
const postsRoute = require("./routes/posts");
const supportRoute = require("./routes/support");
const adminRoute = require("./routes/admin");

// FIXME: => CORS - Remove before deployment
const cors = require("cors");
app.use(cors());

// Middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport
app.use(passport.initialize());
require("./config/passport")(passport);

// Routes
app.use("/api/test", testRoute);
app.use("/api/auth", authRoute);
app.use("/api/profile", profileRoute);
app.use("/api/posts", postsRoute);
app.use("/api/support", supportRoute);
app.use("/api/admin", adminRoute);

// Database
const Database = require("./db/Database");
Database.authenticate()
  .then(() => console.log("Database connection established."))
  .catch(err => console.error("Connection refused. Error: ", err));

// FIXME: => Admin only - Remove before deployment
Database.sync();

// Server Init
const server = require("http").Server(app);

// Socket.io
const io = require("socket.io")(server);

// Server Start
server.listen(config.SERVER_PORT, () =>
  console.log(`Server running on http://localhost:${config.SERVER_PORT}/`)
);

// Modules required for chat messages
const Message = require("./db/models/Message");
const inputValidation = require("./utils/validateInput");

// Sockets
io.on("connection", socket => {
  // Sending messages
  socket.on("send_message", message => {
    const inputErrors = inputValidation.message(message);
    if (!inputErrors) {
      Message.create({
        user_id: message.userId,
        recipient_user_id: message.recipientUserId,
        body: message.body
      })
        .then(result => {
          socket.emit("receive_message", result);
        })
        .catch(err => console.error(err));
    }
  });
  socket.on("request_messages", data => {
    Message.findAll({
      where: { user_id: data.userId, recipient_user_id: data.recipientUserId }
    })
      .then(messages => {
        if (messages) {
          messages.forEach(message => {
            socket.emit("receive_message", message);
          });
        } else {
          socket.emit("receive_message", false);
        }
      })
      .catch(err => console.error(err));
  });
  socket.on("delete_messages", data => {
    Message.findAll({
      where: { user_id: data.userId, recipient_user_id: data.recipientUserId }
    }).then(messages => {
      if (messages) {
        messages.forEach(message => {
          message.destroy();
        });
        socket.emit("messages_deleted", true);
      } else {
        socket.emit("messages_deleted", false);
      }
    });
  });
});
