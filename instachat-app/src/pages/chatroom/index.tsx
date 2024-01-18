import Sidebar from "./components/sidebar";
import ChatBox from "./components/chatbox";
import './style/index.css';

const ChatRoom = () => {
    return(
        <main className="chatroom">
            <aside className="sidebar">
                <Sidebar />
            </aside>
            <section className="chatbox">
                <ChatBox />
            </section> 
        </main>
    )
}

export default ChatRoom;