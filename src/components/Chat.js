import React, { useState, useEffect } from 'react'
import '../style/Chat.css'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import Message from '../components/Message'
import ChatInput from '../components/ChatInput'

function Chat() {

  const { roomId } = useParams()
  const [roomDetails, setRoomDetails] = useState(null)
  const [roomMessages, setRoomMessages] = useState([])

  useEffect(() => {
    if (roomId) {
      db.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => (
        setRoomDetails(snapshot.data())
      ))
    }
    
    db.collection('rooms')
      .doc(roomId)
      .collection('messages')
      .orderBy('createdAt', 'asc')
      .onSnapshot(snapshot => (
        setRoomMessages(
          snapshot.docs.map(doc => doc.data())
        )
      ))
  }, [roomId])

  console.log('roomDetails', roomDetails);

  return (
    <div className="chat">
      <div className="chat__header">
        <div className="chat__header--left">
          <strong>#{roomDetails?.name}</strong>
          <StarBorderOutlinedIcon/>
        </div>
        <div className="chat__header--right">
          <InfoOutlinedIcon />
        </div>
      </div>
      <div className="chat__message">
        { roomMessages.map(({userImage, createdAt, message, userName}, index) => (
          <Message key={index} userImage={userImage} time={createdAt} message={message} userName={userName} />
        )) }
        <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
      </div>
    </div>
  )
}

export default Chat
