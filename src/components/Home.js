import React, { Component } from 'react';
// import logo from './log.png';

const URL="https://jsonplaceholder.typicode.com/todos";

export class Home extends Component {
  constructor(props){
    super(props);
    this.state={
      isChecked: true,
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
                <h4>
                  <li>{value.title}</li>  
                </h4>
              </div>                      
          )
      })  
      this.setState({new:todo})                      
  }) 
}
change = () => {
  this.setState({
    isChecked: !this.state.isChecked,
  });
}
render(){
  return(
    <div>
      <input
        type="text"
        placeholder="Enter your new todo..."
        value={this.state.value}
        onChange={this.handleChange}
      />     
      
      <label>
        <input type="checkbox"
        checked={this.state.isChecked}
        onChange={this.change}        
        />        
      </label> 
      {this.state.new}
    </div>
    
  );
}
}

