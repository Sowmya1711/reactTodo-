import React, { Component } from 'react';
// import logo from './log.png';
const URL="https://jsonprovider.herokuapp.com/todos";

export class Todocontainer extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[],
      isChecked: false,    
      todoBox:null 
    };
    this.handleChange=this.handleChange.bind(this);
  }
  handleKeyPress(target) {
    if(target.charCode ===13){
            alert('Enter clicked!!!');    
    }
}
  handleChange({target}){
    this.setState({
        [target.name]:target.value        
    });
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
    let todo = data.map((value,key) => {             
      return(
        <div>              
          <h4>                
            <li> 
              <label>
                <input type="checkbox"
                checked={this.state.isChecked}
                onChange={this.change}   
                value={!this.state.completed}     
                />        
              </label>
                {value.title}                 
            </li>  
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
        name="todoBox"
        placeholder="Enter your new todo..."
        value={this.state.todoBox}
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}
      />         
      {this.state.new}
    </div>
    
  );
}
}

