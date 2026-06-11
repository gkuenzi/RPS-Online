import { io } from "socket.io-client";

const socket = io(
  "https://urban-enigma-r4xg79x5j99xhwx7q-3001.app.github.dev",
  {
    transports: ["websocket"]
  }
);

socket.on("connect", () => {
  console.log("CONNECTED", socket.id);
});

socket.on("connect_error", (err) => {
  console.error("CONNECT ERROR:", err);
});

export default socket;