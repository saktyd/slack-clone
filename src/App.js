import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './pages/Login'
import MainApp from './pages/MainApp'
import ProtectedRoute from './protectedRoute'

function App() {

  return (
    <div className="slack">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute component={MainApp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
