import { useState } from "react";
import './Homescreen.css'
import socket from "./socket";

function Homescreen() {
    const [lobbyInput, setLobbyInput] = useState('')

    const createLobby = () => {
        socket.emit("createLobby");
        console.log("Connected:", socket.connected);
    };

    const joinLobby = () => {
        console.log("Joining:", lobbyInput);
        socket.emit("joinLobby", lobbyInput);
    };

    return (
        <div className='container'>
            <h1>RPS Online</h1>
            <button onClick={createLobby}>Create Lobby</button>
            <div>
                <h2>Join Lobby</h2>
                <input type="text"
                    value={lobbyInput}
                    onChange={(e) => setLobbyInput(e.target.value)}
                    placeholder='Enter Lobby Code'>
                </input>
                <button onClick={joinLobby}>
                    Join
                </button>
            </div>
        </div>
    )
}

export default Homescreen