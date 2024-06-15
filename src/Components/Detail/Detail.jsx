import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png"></img>
        <h2>Surya </h2>
        <p>Lorem ipsum hi hello mate</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy And Help</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="./arrowDown.png"></img>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Photo.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Photo.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Photo.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Photo.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Photo.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>

            <div className="photoItem">
              <div className="photoDetail">
                <img src="https://images.pexels.com/photos/7408586/pexels-photo-7408586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
                <span>Photo.png</span>
              </div>
              <img src="./download.png" className="icon"></img>
            </div>
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="./arrowUp.png"></img>
          </div>
        </div>
        <button>Block User</button>
        <button className="logout"> LogOut</button>
      </div>
    </div>
  );
};

export default Detail;
