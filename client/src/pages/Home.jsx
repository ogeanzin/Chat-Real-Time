import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'

export const Home = ({ username, setUsername, room, setRoom, socket }) => {
    const navigate = useNavigate()

    function joinRoom() {
        if (username !== '' && room !== '') {
            socket.emit('join_room', { username, room })
        }

        navigate('/chat', { replace: true })
    }

    return (
        <div className="home-container">
            <div className="login-wrapper">
                <h1>Login Chat</h1>

                <input className='input' type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)}/>

                <select className='input' onChange={(e) => setRoom(e.target.value)}>
                    <option>Select Room</option>
                    <option value="sports">Sports</option>
                    <option value="games">Games</option>
                </select>

                <button type='submit'>LOGIN</button>
            </div>
        </div>
    )
}

export default Home