import { BrowserRouter, Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';

import Home from './pages/Home';
import Chat from './pages/Chat';

import './styles/App.css';

const socket = io('http://localhost:3536');
socket.on('connection', () => {
  console.log('conectado');
});

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat' element={<Chat socket={socket} />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;