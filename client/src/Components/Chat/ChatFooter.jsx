import React, { useState } from 'react';

// Assets
import SendIcon from '@mui/icons-material/Send';

const ChatFooter = (socket) => {
    const [messages, setMessages] = useState('');
    console.log(socket)
    
    function handleMessage(e) {
        e.preventDefault();
        
        console.log(socket)
        socket.on('received_message', {
            text: messages,
            name: localStorage.getItem('user.username'),
            socketId: socket.id,
        });
        setMessages('');
    };

    return (
        <div className='w-full'> 
            <form 
                onSubmit={handleMessage} 
                className='w-full flex items-center'
            >
                <input 
                    type="text" 
                    placeholder='Send Message...' 
                    onChange={(e) => setMessages(e.target.value)} 
                    className='w-full p-2'
                />
                
                <button className='m-0'>
                    <SendIcon className='text-blueGreen text-large ml-2 hover:text-blueGreenDark' />
                </button>   
               
            </form>
        </div>
    )
}

export default ChatFooter