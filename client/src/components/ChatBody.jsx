import React from 'react'

import { useNavigate } from 'react-router-dom'

const ChatBody = () => {
    const navigate = useNavigate();

    const leaveChat = () => {
        localStorage.removeItem('username');
        navigate('/');
    }
    return (
        <>
            <header className='chatbody_header'>
                <p>Chat Online</p>
                <button className='btn' onClick={leaveChat}>
                    Leave Room
                </button>
            </header>

            <div className="chat_message">
                <p>Other</p>
                <div className="recipient_message">
                    <p>Hey</p>
                </div>
            </div>

            <div className="status_message">
                <p>Someone is typing ...</p>
            </div>

        </>
    )
}

export default ChatBody