import React from 'react'
import '../style/Header.css'
import { Avatar } from '@material-ui/core'
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { useStateValue } from '../stateProvider'

function Header() {

  const [{user}] = useStateValue()

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
        <Avatar className="header__avatar" alt={user?.displayName} src={user?.photoURL}></Avatar>
        <FiberManualRecordIcon className={user?.photoURL ? 'active online__status' : 'online__status'}/>
      </div>
    </div>
  )
}

export default Header
