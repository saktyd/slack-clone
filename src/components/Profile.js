import React from 'react'
import '../style/Profile.css'
import { Avatar } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../stateProvider'

function Profile({profileToggle}) {
  const [{userProfile}] = useStateValue()

  return (
    <div className="profile">
      <div className="profile__header">
        <strong>Profile</strong>
        <CloseIcon onClick={profileToggle} />
      </div>   
      <div className="profile__body">
        <div className="profile__avatar">
          <Avatar type="button" alt={userProfile?.name} src={userProfile?.picture} />
        </div>
        <div className="profile__name">
          <strong>{userProfile?.name}</strong>
        </div>
        <div className="profile__info">
          <span className="label">Email address</span>
          <a target="_blank" href={`mailto:${userProfile?.email}`} rel="noopener noreferrer" className="email">{userProfile?.email}</a>
        </div>
      </div>
    </div>
    )
}

export default Profile
