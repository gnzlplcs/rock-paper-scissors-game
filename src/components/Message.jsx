import React from "react";
import "./Message.css";

const Message = ({ userSelection, message }) => {
  return (
    <div className="message-box">
      <h2>{userSelection === "" ? "VS" : message}</h2>
    </div>
  );
};

export default Message;
