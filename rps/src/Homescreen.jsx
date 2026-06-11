import { useState } from "react";
import './Homescreen.css'
import socket from "./socket";

function Homescreen() {

const createLobby = () => {
    socket.emit("createLobby");
    console.log("Connected:", socket.connected);
};

    return (
        <div className='container'>
            <h1>RPS Online</h1>
            <button onClick={createLobby}>Create Lobby</button>
        </div>
    )
}

export default Homescreen