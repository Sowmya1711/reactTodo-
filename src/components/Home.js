import React, { Component } from 'react';
import logo from './log.png';

const URL="https://jsonplaceholder.typicode.com/todos";

export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    };
  }

componentDidMount(){
  fetch(URL,{
    headers:{
      'Accept':'application/json',
    },
  })
  .then(results => {
      return results.json();
  }).then(data => {
      let todo = data.map((value,id) => {             
          return(
              <div>
                 <h4> {value.title} </h4>
              </div>                        
          )
      })  
      this.setState({new:todo})                      
  })    
}
render(){
  return(
    <div>
      <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
      />
      {this.state.new}
    </div>
    
  );
}
}
