import Message from "./message";
import SendMessage from "./sendMessage";

const ChatBox = () => {
    return(
        <main className="chatbox-wrapper">
            <div className="messages-wrapper">
                <Message />
            </div>
            <SendMessage />
        </main>
    )
}

export default ChatBox;