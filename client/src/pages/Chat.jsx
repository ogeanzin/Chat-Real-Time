import React from 'react'

import ChatBar from '../components/ChatBar'
import ChatBody from '../components/ChatBody'
import ChatFooter from '../components/ChatFooter'

const Chat = ({ socket }) => {
  return (
    <div className='chat'>
       <ChatBar /> 
       <div className="chat_main">
            <ChatBody />
            <ChatFooter socket={socket}/>
       </div>
    </div>
  )
}

export default Chat