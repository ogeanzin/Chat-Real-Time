import { BrowserRouter, Route, Routes } from 'react-router-dom'
import io from 'socket.io-client'
import { useState } from 'react'

import Home from './pages/Home';

import './App.css';

const socket = io('http://localhost:3536')

function App() {
  const [username, setUsername] = useState('')
  const [room, setRoom] = useState('')
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home username={username} setUsername={setUsername} room={room} setRoom={setRoom} socket={socket} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;