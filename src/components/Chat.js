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

  const scrollToEnd = () => {
    const container = document.querySelector('.chat__message');
    const { scrollHeight } = container;
    container.scrollTop = scrollHeight;
  }

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
        ),
        scrollToEnd()
      ))
    
  }, [roomId])

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
      { roomMessages && roomMessages.length > 0 ? (
        <>
          <div className="chat__message">
            { roomMessages.map(({userImage, createdAt, message, userName}, index) => (
              <Message key={index} userImage={userImage} time={createdAt} message={message} userName={userName} />
            )) }
          </div>
          <ChatInput channelName={roomDetails?.name} channelId={roomId} scrollToEnd={scrollToEnd}/>
        </>
      ) : (<> </>) }
      
    </div>
  )
}

export default Chat
