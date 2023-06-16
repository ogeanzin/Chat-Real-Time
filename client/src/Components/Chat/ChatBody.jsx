import React, { useState } from 'react'

const ChatBody = () => {
    const [messageList, setMessageList] = useState([]);
    
  return (
    <div className='w-full h-chatBody bg-white'>ChatBody</div>
  )
}

export default ChatBody