import React, { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { IMessageProps } from "../../../types";

const Message: React.FC<IMessageProps>  = ({ details }) => {
  const [userType, setUserType] = useState<string>("others");
  
  useEffect(() => {
    if (auth.currentUser && auth.currentUser.uid === details.uid) setUserType("main-user");
  },[auth.currentUser]);
  
  return (
    <div className={`chat-bubble ${userType}`}>
      <img className="chat-bubble__left" src={details.avatar} alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">{details.name}</p>
        <p className="user-message">
          {details.text}
        </p>
      </div>
    </div>
  );
};

export default Message;