import React, { Component } from 'react';
import {Todo} from './Todo.js';

const DESC = "https://jsonprovider.herokuapp.com/todos?limit=50&sort=id+desc";
const POST = "https://jsonprovider.herokuapp.com/todos?limit=50";

export class Todoscontainer extends Component {
    constructor(props) {
      super(props); 
      this.state = {
        data: []
      };
    }
   
    componentDidMount() {
      this.fetchTodos()
    }
  
  //fetch data's from api
    fetchTodos() {
      fetch(DESC, {
        headers: {
          'Accept': 'application/json',
        },
      })
        .then(results => {
          return results.json();
        }).then(data => {
          this.setState({ data: data })
        })
    }
    todoItems = (item) => {
        return <Todo itemData={item}/>
    }
    render(){
        return(
            <Todo todos={this.state.data} />
        )
    }  
}