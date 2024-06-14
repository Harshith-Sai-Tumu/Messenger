import React, { useState } from "react";
import "./chatList.css";
const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="chatlist">
      <div className="search">
        <div className="searchbar">
          <img src="./search.png" alt=""></img>
          <input type="text" placeholder="Search"></input>
        </div>
        <img
          className="plus"
          src={addMode ? "./minus.png" : "./plus.png"}
          alt=""
          onClick={() => {
            setAddMode((prev) => !prev);
          }}
        ></img>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Surya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Surya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Surya</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt=""></img>
        <div className="texts">
          <span>Surya</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
