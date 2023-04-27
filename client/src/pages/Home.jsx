import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({username: '', password: ''});

    const joinRoom = (e) => {
        e.preventDefault();
        localStorage.setItem('user', user);
        navigate('/chat');
    };

    function handleUsername(e) {
        setUser({
            ...user,
            username: e.target.value
        });
    };

    function handlePassword(e) {
        setUser({
            ...user,
            password: e.target.value
        });
    };

    return (
        <div className="w-full flex flex-col p-4 items-center justify-center">
            <form className="w-96 bg-white p-9 rounded-lg shadow-md text-base" onSubmit={joinRoom}>
                <h2 className='text-5xl text-center pb-9'>Login Chat</h2>
                
                    <label htmlFor="username">Username</label>
                    <input 
                        className='mb-2.5 w-full border-none p-1 cursor-pointer rounded-sm h-12 shadow' 
                        type="text" placeholder='Username' 
                        name='username' id='username' 
                        value={user.username} 
                        onChange={handleUsername}
                    />
                
                    <label htmlFor="password">Password</label>
                    <input 
                        className='mb-2.5 w-full border-none p-1 cursor-pointer rounded-sm h-12 shadow' 
                        type="password" 
                        placeholder='Password' 
                        name='password' 
                        id='password' 
                        value={user.password} 
                        onChange={handlePassword}
                    />
                
                <button 
                    type='submit' 
                    className='w-full rounded-2xl h-12 flex items-center justify-center font-medium leading-4 duration-500 cursor-pointer border-none bg-[#c8def7] hover:bg-[#70adf3] hover:text-white'>
                        LOGIN
                </button>
            </form>
        </div>
    )
}

export default Home