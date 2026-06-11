import express from "express";
import http from "http";
import { Server } from "socket.io";

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: true,
        methods: ["GET", "POST"]
    }
});

const lobbies = {};

io.on("connection", (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on("createLobby", () => {
        io.on("connection", (socket) => {
            console.log(`Connected: ${socket.id}`);

            socket.onAny((event, ...args) => {
                console.log("Received event:", event, args);
            });

            socket.on("createLobby", () => {
                console.log("create lobby received");
                // ...
            });
        });

        socket.on("joinLobby", (lobbyId) => {

            if (!lobbies[lobbyId]) return;

            lobbies[lobbyId].players.push(socket.id);

            socket.join(lobbyId);

            io.to(lobbyId).emit(
                "playerCount",
                lobbies[lobbyId].players.length
            );
        });

        
        console.log('create lobby recieved')

        const lobbyId =
            Math.random().toString(36).substring(2, 8);

        lobbies[lobbyId] = {
            players: [socket.id]
        };

        socket.join(lobbyId);

        socket.emit("lobbyCreated", lobbyId);

        console.log("Created lobby:", lobbyId);
    });
});

app.get("/", (req, res) => {
    res.send("THIS IS MY NEW SERVER");
});

server.listen(3001, () => {
    console.log("Server running on port 3001");
});