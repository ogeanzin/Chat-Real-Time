import React, { useEffect, useState } from 'react';

// Components
import ChatFooter from '../Components/Chat/ChatFooter';
import ChatBody from '../Components/Chat/ChatBody';

const Chat = (socket) => {

   return (
    <div className='flex justify-center items-center p-2 h-screen'>
       <div className='w-1/2 flex flex-col items-center justify-center'>
         <ChatBody />
         <ChatFooter socket={socket} />
       </div>
       
    </div>
  )
}

export default Chat