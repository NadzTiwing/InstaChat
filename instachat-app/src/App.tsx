import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ChatRoom } from './pages/chatroom';
import Login from './pages/login';
import { Suspense } from "react";
import Loader from "./pages/chatroom/components/loader";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      { !user?.emailVerified ? 
      <Login/>
      : 
      <Suspense fallback={<Loader />}>
        <ChatRoom/>
      </Suspense>
      }
    </>
  )
}

export default App
