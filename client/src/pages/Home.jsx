import React from 'react'

import './Home.css'

export const Home = () => {
  return (
    <div className="home-container">
        <div className="login-wrapper">
            <h1>Login Chat</h1>
            <input type="text" placeholder='Username' />
            <button>LOGIN</button>
        </div>
    </div>
  )
}

export default Home