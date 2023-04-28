import React, { useEffect, useState } from 'react';

import ChatFooter from '../components/Chat/ChatFooter';

const Chat = (socket) => {

   return (
    <div className='w-3/6'>
       <ChatFooter socket={socket} />
    </div>
  )
}

export default Chat