import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Home.css'

export const Home = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')

    const joinRoom = (e) => {
        e.preventDefault();
        localStorage.setItem('username', username);
        navigate('/chat');
    }

    return (
        <div className="home-container">
            <form action="" className='form' onSubmit={joinRoom}>
                <h1>Open Chat</h1>
                <input className='input' type="text" placeholder='Username' name='username' id='username' onChange={(e) => setUsername(e.target.value)}/>
                <button type='submit' onClick={joinRoom}>LOGIN</button>
            </form>
        </div>
    )
}

export default Home