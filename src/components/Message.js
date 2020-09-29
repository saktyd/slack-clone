import React from 'react'
import '../style/Message.css'

function Message({userImage, time, message, userName}) {
  return (
    <div className="message">
      <img src={userImage} alt=""/>
      <div className="message__detail">
        <div className="message__detail--header">
          <strong>{userName}</strong>
          <span>{time ? new Date(time?.toDate()).toUTCString() : ''}</span>
        </div>
        <div className="message__detail--body">
          <p>{message}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
