import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const ChatFooter = (socket) => {
    const [messages, setMessages] = useState('');
    console.log(socket)
    function handleMessage(e) {
        e.preventDefault();
        
        socket.emit('messages', {
            text: messages,
            name: localStorage.getItem('user.username'),
            socketId: socket.id,
        });
        setMessages('');
    };

    return (
        <div> 
            <form 
                onSubmit={handleMessage} 
                className='w-full'
            >
                <input 
                    type="text" 
                    placeholder='Send Message...' 
                    onChange={(e) => setMessages(e.target.value)} 
                    className='w-9/12 p-2'
                />
                <button>
                    <SendIcon className='text-blueGreen ml-2 hover:text-blueGreenDark text-string'/>
                </button>
            </form>
        </div>
    )
}

export default ChatFooter