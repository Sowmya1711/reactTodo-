import React, { Component } from 'react';
import logo from './log.png';
import './App.css';
// const URL="http://192.168.1.29:1337/todos?sort=id+desc";
const URL="https://jsonplaceholder.typicode.com/todos";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      trackTitle: [],
      title:[]
    };
  }
  componentDidMount(){
     fetch(URL)
    .then((res)=>{
      this.setState({data:res.title})
    })
    .then((json)=>{
      console.log('parsed json',json)
    })
    .catch((ex)=>{
      console.log('parsing failed',ex)
    })
    console.log(this.state.data)
  } 
  render() {
    const { trackTitle, value } = this.state    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>TODO APPLICATION USING REACT</h2>
          Start a day with Todo by adding new Task
        </div>
        <p className="App-intro">
         
        </p>
        <ul>{trackTitle.map((title) =><li>{title}</li>)}</ul>
      </div>
    );
  }
}

export default App;
