import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import { useStateValue } from './stateProvider'

function App() {

  const [{user}, dispatch] = useStateValue()

  return (
    <div className="slack">
      <Router>
        {
          !user ? (<Login/>) : (
          <>
            <Header/>
            <div className="slack__body">
              <Sidebar/>
              <Switch>
                <Route path="/room/:roomId">
                  <Chat/>
                </Route>
                <Route path="/">
                  <h2>Welcome</h2>
                </Route>
              </Switch>
            </div>
          </>
          )
        }
        
      </Router>
    </div>
  );
}

export default App;
