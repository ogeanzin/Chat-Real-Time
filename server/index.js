const express = require('express');
const app = express();
http = require('http');
const cors = require('cors');
const { Server } = require('socket.io')

app.use(cors())

const server = http.createServer(app)

const io = new Server(server, {
    cors: {
      origin: 'http://localhost:3007',
      methods: ['GET', 'POST'],
    },
  });

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('message', (data) => {
      console.log(data)
      socket.emit('messageSending', data)
    })

    socket.on('disconnect', () => {
      console.log(`User ${socket.id} disconnected`)
    })
})

server.listen(3536, () => {
    console.log('Server running on port 3536');
})