import React from 'react'
import '../style/Header.css'
// import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import PersonIcon from '@material-ui/icons/Person';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <AccessTimeIcon/>
      </div>
      <div className="header__search">
        <SearchIcon/>
        <input placeholder="Search"></input>
      </div>
      <div className="header__right">
        <HelpOutlineIcon/>
        <PersonIcon className="header__avatar" alt="avatarUser"></PersonIcon>
        <FiberManualRecordIcon className="online__status"/>
      </div>
    </div>
  )
}

export default Header
