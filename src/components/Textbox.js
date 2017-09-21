import React, { Component } from 'react';
export class Textbox extends Component{
    constructor() {
        super();
        this.state = {
          todoBox:null
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange({target}){
        this.setState({
            [target.name]:target.value
            
        });
    }
    render(){
        return(
            <div>
            <input 
              type="text" 
              name="todoBox" 
              placeholder="Enter topic here..." 
              value={ this.state.todoBox }
              onChange={ this.handleChange } 
            />
            </div>
        );
    }
}
