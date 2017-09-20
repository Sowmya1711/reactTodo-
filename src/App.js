import React, { Component } from 'react';
import logo from './components/log.png';
import './App.css';
import {Home} from './components/Home.js';
//import {Checkbox} from './components/Checkbox.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO APPLICATION USING REACT</h2>
            Start a day with Todo by adding new Task
        </div>
        <p className="App-intro">
        </p>
        <Home/>
        {/* <Checkbox/> */}
      </div>
    );
  }
}

export default App;
