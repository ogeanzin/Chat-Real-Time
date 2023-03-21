const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io')

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3000',
      methods: ['GET', 'POST'],
    },
  });

let chatRoom = '';
let allUsers = [];
let chatRoomUsers;

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`)

    socket.on('join_room', (data) => {
        const { username, room } = data;
        socket.join(room) ;

        chatRoom = room;
        allUsers.push({ id: socket.id, username, room});
        chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers)

        let createdTime = Date.now();

        socket.to(room).emit('receive_message', {
            message: `${username} has joined in the chat room`,
            username: 'ChatBot',
            createdTime,
        })
    })

    
})

server.listen(3536, () => {
    console.log('Server running on port 3536')
})