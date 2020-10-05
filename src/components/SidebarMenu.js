import React from 'react'
import { db } from '../firebase'
import '../style/SidebarMenu.css'
import { useHistory } from 'react-router-dom'

function SidebarMenu( {Icon, title, className, id, type, AddChannelOption} ) {
  const history = useHistory()

  const selectChannel = () => {
    if (id) {
      history.push(`/client/${id}`)
    } else {
      history.push(title)
    }
  }

  const setChannel = () => {
    const channelName = prompt('Please enter the channel name')
    if (channelName) {
      db.collection('rooms').add({
        name: channelName
      })
    }
  }

  return (
    <div 
    onClick={ AddChannelOption ? setChannel : selectChannel}
    className={className ? `${className} sidebarMenu` : 'sidebarMenu'}>
      {Icon ? <Icon/> : <span className="hastag">#</span>}
      { title && <span>{title}</span> }
      { AddChannelOption && <AddChannelOption className="add__channel" />}
    </div>
  )
}

export default SidebarMenu
