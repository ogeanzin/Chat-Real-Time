import React, {useState} from 'react'

const ChatFooter = () => {
    const [message, setMessage] = useState('');

    const handleMessage = (e) => {
        e.preventDefault();

        socket.emit('message', {
            text: message,
            name: localStorage.getItem('username'),
            socketID: socket.id,
        });

        setMessage('');
    }

    return (
        <div className='chat_footer'>
            <form className="form" onSubmit={handleMessage}>
                <input 
                    className='message'
                    type="text" 
                    placeholder='Write message'
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className='btn'>Send Message</button>
            </form>
        </div>
    )
}

export default ChatFooter