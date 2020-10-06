import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Chat from '../components/Chat'
import Home from '../components/Home'
import Profile from '../components/Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function MainApp() {

  const [isShowProfile, setShowProfile] = useState(true)

  const profileToggle = () => {
    setShowProfile(!isShowProfile)
  }

  return (
    <div>
      <Router>
        <Header profileToggle={profileToggle} isShowProfile={isShowProfile}/>
        <div className="slack__body">
          <Sidebar/>
          <Switch>
            <Route path="/client/:clientId" component={Chat} />
            <Route exact path="/" component={Home} />
          </Switch>
          <div>
            { isShowProfile ? (  <Profile profileToggle={profileToggle} /> ) : (<></>) }
          </div>
         
        </div>
      </Router>
    </div>
  )
}

export default MainApp
