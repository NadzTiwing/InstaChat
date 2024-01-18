const SendMessage = () => {
    return (
      <form className="send-message">
        <input
          id="messageInput"
          name="messageInput"
          type="text"
          className="form-input__input"
          placeholder="Type your message here..."
        />
        <button type="submit">SEND</button>
      </form>
    );
  };
  
  export default SendMessage;