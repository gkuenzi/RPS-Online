import React, { useState, useEffect } from 'react'
import Homescreen from './Homescreen.jsx'
import Gameplay from './gameplay.jsx'

import socket from "./socket";
import './App.css'

function App() {
  const [screen, setScreen] = useState(0)
  const [code, setCode] = useState('')

  useEffect(() => {

    socket.on("connect", () => {
      console.log("CONNECTED:", socket.id);
    });

    socket.on("connect_error", (err) => {
      console.log("CONNECT ERROR:", err);
    });

    socket.on("lobbyCreated", (lobbyId) => {
      console.log("Lobby Created:", lobbyId);
      setCode(lobbyId)
      setScreen(1)
    });

    return () => {
      socket.off("connect");
      socket.off("connect_error");
      socket.off("lobbyCreated");
    };

  }, []);

  return (
    <>
    {screen === 0 ? <Homescreen /> : <Gameplay lobbyCode={code} />}
    </>
  )
}

export default App
