import React, { useState, useEffect } from 'react'
import '../style/Sidebar.css'
import SidebarMenu from './SidebarMenu'
import { db } from '../firebase'
// icon
import SubjectIcon from '@material-ui/icons/Subject';
import CreateIcon from '@material-ui/icons/Create';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';
import QuestionAnswerOutlinedIcon from '@material-ui/icons/QuestionAnswerOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import MoreVertOutlinedIcon from '@material-ui/icons/MoreVertOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';

function Sidebar() {

  const menuList = [
    { icon: SubjectIcon, title: 'All unreads' },
    { icon: CommentOutlinedIcon, title: 'Threads' },
    { icon: QuestionAnswerOutlinedIcon, title: 'All DMs' },
    { icon: DescriptionOutlinedIcon, title: 'Drafts' },
    { icon: SupervisorAccountOutlinedIcon, title: 'Mentions & reactions' },
    { icon: BookmarkBorderOutlinedIcon, title: 'Saved Items' },
    { icon: MoreVertOutlinedIcon, title: 'More' },
    { icon: ArrowDropDownOutlinedIcon, title: 'Channels', style: {marginBottom: '10px'}, className: 'bold-menu' },
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
        <h2>Slack Clone</h2>
        <h5 className="sidebar__info">
          <ArrowDropDownIcon/>
          Sakti Dewantoro
        </h5>
        <button className="sidebar__create--icon">
          <CreateIcon/>
        </button>
      </div>
      <div style={{paddingTop: '10px', paddingBottom: '10px'}}>
        { menuList.map((item, index) => (
          <SidebarMenu key={index} Icon={item.icon} title={item.title} style={item.style} className={item.className} />
        ))}
        { channels.map( channel => (
          <SidebarMenu key={channel.id}  title={channel.name} id={channel.id} />
        )) }
      </div>
    </div>
  )
}

export default Sidebar
