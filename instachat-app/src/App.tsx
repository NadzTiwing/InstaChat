import ChatRoom from './pages/chatroom';
import Login from './pages/login';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  return (
    <>
      { isAuthenticated ? <ChatRoom/> : <Login/>  }
    </>
  )
}

export default App
