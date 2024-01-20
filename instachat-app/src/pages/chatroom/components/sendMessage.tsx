import React, { FormEvent, useEffect, useState } from "react";
import { auth, db } from "../../../firebase";
import { doc, addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ISendMessageProps } from "../../../types";

const SendMessage: React.FC<ISendMessageProps> = ({ scroll, room }) => {
  const [message, setMessage] = useState("");
  const [roomId, setRoomdId] = useState("");

  const sendMessage = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (message.trim() === "") {
      alert("Say something.");
      return;
    }

    const user = auth.currentUser;
    if (user) {
      const { uid, displayName, photoURL } = user;
      const objData = {
        text: message,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      };
      const chatRef = doc(db, "conversation", roomId);
      await addDoc(collection(chatRef, "messages"), objData);
      setMessage("");
      if (scroll.current) scroll.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    setRoomdId(room);
  }, [room]);

  return (
      <form className="send-message" onSubmit={(event) => sendMessage(event)}>
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input__input"
          placeholder="Type something..."
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
        />
        <button type="submit">SEND</button>
      </form>
    );
  };
  
  export default SendMessage;