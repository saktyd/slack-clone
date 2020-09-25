import React from 'react'
import '../style/Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'

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
        <Avatar className="header__avatar" alt="avatarUser"></Avatar>
      </div>
    </div>
  )
}

export default Header