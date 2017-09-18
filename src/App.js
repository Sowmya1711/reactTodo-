import React, { Component } from 'react';
import logo from './log.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO APPLICATION USING REACT</h2>
          Start a day with Todo by adding new Todo
        </div>
        <p className="App-intro">
         
        </p>
      </div>
    );
  }
}

export default App;
