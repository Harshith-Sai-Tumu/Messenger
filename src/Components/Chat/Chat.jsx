import React, { useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt=""></img>
          <div className="texts">
            <span>Surya</span>
            <p>Lorem ipsum</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png"></img>
          <img src="./video.png"></img>
          <img src="./info.png "></img>
        </div>
      </div>
      <div className="center">
        <div className="message">
          <img src="./avatar.png"></img>
          <div className="texts">
            <p>Lorem ipsum hi heloo</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum hi heloo</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png"></img>
          <div className="texts">
            <p>Lorem ipsum hi heloo</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
            <p>Lorem ipsum hi heloo</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message">
          <img src="./avatar.png"></img>
          <div className="texts">
            <p>Lorem ipsum hi heloo</p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="message own">
          
          <div className="texts">
          <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Hello"></img>
            <p>Lorem ipsum hi heloo</p>
            <span>1 min ago</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png"></img>
          <img src="./camera.png"></img>
          <img src="./mic.png"></img>
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type your message"
          onChange={(e) => {
            setText(e.target.value);
          }}
        ></input>
        <div className="emoji">
          <img src="./emoji.png" onClick={() => setOpen((prev) => !prev)}></img>
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
