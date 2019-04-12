import io from "socket.io-client";
import Store from "./Store";

const socket = io(Store.applyProxy(""));
socket.on("test", data => {
  console.log(data);
});
