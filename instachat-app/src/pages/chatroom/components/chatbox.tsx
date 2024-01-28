import { useEffect, useRef, useState, Suspense } from "react";
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from "firebase/firestore";
import { db } from "./../../../firebase";
import Message from "./message";
import SendMessage from "./sendMessage";
import { IMessage } from "../../../types";
import { useRoomContext } from "./../index";
import Loader from "./loader";

const ChatBox = () => {
    const [messages, setMessages] = useState([]);
    const scroll = useRef<HTMLSpanElement>(null);
    const { selectedRoomId } = useRoomContext();

    const displayNoData = (message:string) => ((
      <div className="messages-wrapper">
        <p id="error-txt">{message}</p>
      </div>
    ))

    useEffect(() => {
      if (selectedRoomId) {
        const fetchQuery = query(
          collection(db, "conversation", selectedRoomId, 'messages'),
          orderBy("createdAt", "desc"),
          limit(50)
        );

        const unsubscribe = onSnapshot(fetchQuery, (QuerySnapshot) => {
          const fetchedMessages: any = [];
          QuerySnapshot.forEach((doc) => {
            fetchedMessages.push({ ...doc.data(), id: doc.id });
          });
          const sortedMessages = fetchedMessages.sort(
            (a: any, b: any) => a.createdAt - b.createdAt
          );
          setMessages(sortedMessages);
        });
        
        return () => {
          unsubscribe
        };
      }
    }, [selectedRoomId]);

    return(
        <main className="chatbox-wrapper">
          {selectedRoomId === ""? 
            displayNoData("SELECT A ROOM")
          :
            <Suspense fallback={<Loader/>}>
              {messages.length > 0 ?
              <>
                <div className="messages-wrapper">
                {messages?.map((message: IMessage) => (
                    <Message key={message.id} details={message} />
                ))}
                </div>
                <span ref={scroll}></span>
              </>
              :
                displayNoData("EMPTY CHATROOM")
              }
              
            </Suspense>
          }
            <SendMessage scroll={scroll} room={selectedRoomId} />
        </main>
    )
}

export default ChatBox;