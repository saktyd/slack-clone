import React from 'react'
import '../style/Profile.css'
import CloseIcon from '@material-ui/icons/Close';

function Profile({profileToggle}) {
  return (
    <div className="profile">
      <div className="profile__header">
        <strong>Profile</strong>
        <CloseIcon onClick={profileToggle} />
      </div>    
    </div>
    )
}

export default Profile
