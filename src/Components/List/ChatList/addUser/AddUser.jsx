import React from 'react'
import "./addUser.css"
const AddUser = () => {
  return (
    <div className='addUser'>
        <form>
        <input type="text" placeholder='Username' name="username"></input>
        <button>Search</button>
        </form>
        <div className='user'>
            <div className='detail'>
                <img src="./avatar.png"></img>
                <span>Username</span>
            </div>
        </div>
    </div>
  )
}

export default AddUser