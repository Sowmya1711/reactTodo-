import React, { Component } from 'react';
// import logo from './log.png';
const URL="https://jsonprovider.herokuapp.com/todos";

export class Todocontainer extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    };
  }

componentDidMount(){
  this.fetchTodos()  
}

fetchTodos(){
  fetch(URL,{
    headers:{
      'Accept':'application/json',
    },
  })
  .then(results => {
      return results.json();
  }).then(data => {
    let todo = data.map((value,key) => {   
      //  return   value.title;
    })    
     this.setState({data:data})                      
   })
} 

render(){ 
  // let  listItems =  (this.state.new) ? this.state.new.map( (data,i )=> <li key={i}>{data}</li> ) : null;
    
  let  listItems =   this.state.data.map( (data,i )=> <li key={i}> {data.completed ? <input type="checkbox" checked /> : <input type="checkbox" />
}{data.title}</li> ) ;
  
  return(
    <div> 
    <h4> <ul>
    {listItems}
    </ul>  </h4> 
    </div>
    
  );
}
}
