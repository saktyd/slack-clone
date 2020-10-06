import React, { useState, useEffect } from 'react'
import '../style/Sidebar.css'
import SidebarMenu from './SidebarMenu'
import { db } from '../firebase'
import { useStateValue } from '../stateProvider'
// icon
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';

function Sidebar() {

  const [{userProfile}] = useStateValue()

  const menuList = [
    { icon: HomeIcon, title: 'Home'},
    { icon: ArrowDropDownOutlinedIcon, title: 'Channels', addChannel: AddIcon, className: 'channel-menu' },
  ]

  const [channels, setChannels] = useState([])

  useEffect(() => {
    // run when sidebar component loading
    db.collection('rooms').onSnapshot( snapshot => {
      setChannels(
        snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,  
        }))
      )
    })
  }, [])

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <h5 className="sidebar__info">
          {userProfile?.name}
        </h5>
        <button className="sidebar__create--icon">
          <CreateIcon/>
        </button>
      </div>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
        { menuList.map((item, index) => (
          <SidebarMenu key={index} Icon={item.icon} title={item.title} AddChannelOption={item.addChannel} style={item.style} className={item.className} />
        ))}
        { channels.map( channel => (
          <SidebarMenu key={channel.id} title={channel.name} type={'channel'} id={channel.id} />
        )) }
      </div>
    </div>
  )
}

export default Sidebar
