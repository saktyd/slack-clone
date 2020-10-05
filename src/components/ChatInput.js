import React, {useState} from 'react'
import '../style/ChatInput.css'
import { useStateValue } from '../stateProvider'
import SendIcon from '@material-ui/icons/Send';
import { db } from '../firebase'
import firebase from 'firebase'

function ChatInput({ channelName, channelId, scrollToEnd }) {
  const [inputValue, setInput] = useState("")
  const [{userProfile}] = useStateValue()

  const sendMessage = (e) => {
    e.preventDefault()

    if (channelId) {
      db.collection('rooms').doc(channelId).collection('messages').add({
        message: inputValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userImage: userProfile.picture,
        userName: userProfile.name
      })
    }

    setInput('')
    scrollToEnd()
  }

  return (
    <div className="chat-input">
      <form>
        <input type="text" onChange={e => setInput(e.target.value)} value={inputValue} placeholder={`Message ${channelName}`}/>
        <button type="submit" onClick={sendMessage}>
          <SendIcon/>
        </button>
      </form>
    </div>
  )
}

export default ChatInput
