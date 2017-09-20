import React, { Component } from 'react';
export class Checkbox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    change = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.change}
          />        
         </label>
      );
    }
  }