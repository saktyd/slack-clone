import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Chat from '../components/Chat'
import Home from '../components/Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function MainApp() {
  return (
    <div>
      <Router>
        <Header/>
        <div className="slack__body">
          <Sidebar/>
          <Switch>
            <Route path="/client/:clientId" component={Chat} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default MainApp
