import React, { useState } from 'react'
import '../style/Header.css'
import { Avatar, Badge, Menu, MenuItem } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime'
import SearchIcon from '@material-ui/icons/Search'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import { useStateValue } from '../stateProvider'

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px #3f0f40`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
    right: '4%',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

function Header({profileToggle, isShowProfile}) {

  const [{userProfile}] = useStateValue()
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    if (!isShowProfile) {
      profileToggle()
    }
    handleClose()
  }

  const signOutUser = () => {
    handleClose()
    localStorage.clear()
    window.location.href = '/login'
  }

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
        <StyledBadge
          overlap="circle"
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          variant="dot"
        >
          <Avatar className="header__avatar" type="button" onClick={handleClick} alt={userProfile?.name} src={userProfile?.picture} />
        </StyledBadge>
      </div>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => { handleProfile(); handleClose(); }}>Profile</MenuItem>
        <MenuItem onClick={signOutUser}>Sign out</MenuItem>
      </Menu>
    </div>
  )
}

export default Header
