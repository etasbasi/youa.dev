import io from "socket.io-client";
import Store from "./Store";
const socket = io(Store.applyProxy(""));

// NOTE: => Emmiters
// send_message
// request_messages
// delete_messages

// eslint-disable-next-line
const handler = (data, type) => {
  socket.emit(type, data);
};

// NOTE: => Receivers
// receive_message
// messages_deleted

socket.on("receive_message", data => {
  if (Array.isArray(data)) {
    data.forEach(message => console.log(message));
  } else {
    console.log(data);
  }
});

socket.on("messages_deleted", response => console.log(response));
