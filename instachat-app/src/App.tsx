import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from './pages/chatroom';
import Login from './pages/login';

function App() {
  const [user] = useAuthState(auth);
  return (
    <>
      { !user ? 
      <Login/>
      : 
      <ChatRoom/>
      }
    </>
  )
}

export default App
