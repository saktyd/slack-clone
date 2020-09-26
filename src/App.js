import React from 'react';
import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="slack">
      <Header/>
      <div className="slack__body">
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
