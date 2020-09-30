import React, {useState} from 'react'
import '../style/ChatInput.css'
import { useStateValue } from '../stateProvider'
import { db } from '../firebase'
import firebase from 'firebase'

function ChatInput({ channelName, channelId }) {
  const [inputValue, setInput] = useState("")
  const [{user}] = useStateValue()

  const sendMessage = (e) => {
    e.preventDefault()

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: inputValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userImage: user.photoURL,
        userName: user.displayName
      })
    }

    setInput('')
  }

  return (
    <div className="chat-input">
      <form>
        <input type="text" onChange={e => setInput(e.target.value)} value={inputValue} placeholder={`Message ${channelName}`}/>
        <button type="submit" onClick={sendMessage}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
