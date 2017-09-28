import React, { Component, PropTypes } from 'react';

const DESC = "https://jsonprovider.herokuapp.com/todos?limit=50&sort=id+desc";
const POST = "https://jsonprovider.herokuapp.com/todos?limit=50";

export class Checkbox extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      isChecked: false
    };
    this.toggleCheckboxChange = this.toggleCheckboxChange.bind(this); 
  }
  
  toggleCheckboxChange = () => {
    const { handleCheckboxChange, completed } = this.props;
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
   handleCheckboxChange(completed)
    this.createCheck()
  }

  //For PUT method
  createCheck(id, checked) {
    let datas = {
      'completed': checked
    }
    fetch(POST + id, {
      method: 'PUT',
      mode: 'CORS',
      body: JSON.stringify(datas),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      return res;
    }).catch(err => err);
  }

  render() {
    const { completed } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="checkbox">
        <label>
          <input
            type="checkbox"
            value={completed}
            checked={isChecked}
            onChange={this.toggleCheckboxChange}
          />
          {completed}
        </label>
      </div>
    );
  }
}

// Checkbox.propTypes = {
//   completed: PropTypes.string.isRequired,
//   handleCheckboxChange: PropTypes.func.isRequired,
// };
