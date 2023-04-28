import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
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
        <form className="w-96 p-9 rounded-lg text-blueGreen items-center text-center" onSubmit={joinRoom}>
            <h1 className='text-5xl text-center pb-9'>Sign in</h1>
                <p className='my-10'>Sign in and start chatting with your friends!</p>
                
                <input 
                    className='mb-8 w-80 bg-blueGreen text-white border-none p-2 cursor-pointer rounded-md h-12 shadow' 
                    type="text" placeholder='Username' 
                    name='username' id='username' 
                    value={user.username} 
                    onChange={handleUsername}
                />
            
                <input 
                    className='mb-8 w-80 bg-blueGreen text-white border-none p-2 cursor-pointer rounded-md h-12 shadow' 
                    type="password" 
                    placeholder='Password' 
                    name='password' 
                    id='password' 
                    value={user.password} 
                    onChange={handlePassword}
                />
            
            <button 
                type='submit' 
                className='w-80 rounded-md h-12 flex items-center justify-center font-medium leading-4 duration-500 cursor-pointer border-none bg-green hover:bg-greenDark hover:text-white'>
                    LOGIN
            </button>
        </form>
    )
}

export default Login