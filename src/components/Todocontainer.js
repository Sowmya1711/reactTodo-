import React, { Component } from 'react';
// import logo from './log.png';
//const URL="https://jsonprovider.herokuapp.com/todos";
const DESC = "https://jsonprovider.herokuapp.com/todos?limit=50&sort=id+desc";
const POST = "https://jsonprovider.herokuapp.com/todos?limit=50";

export class Todocontainer extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.handleSubmit.bind(this);
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

//for POST method
  handleSubmit(e) {
    let datt = {
      title: e.target.todoBox.value,
      completed: false,
      userID: 1
    }
    e.preventDefault();
      console.log("check", e)
        e.target.todoBox.value = "";
    let headers = {
      'Content-Type': 'application/json',
      'Access-Control-Origin': '*'
    }
    fetch(DESC, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(datt)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (datt) {
        console.log(datt)
      });
      this.updateCheck()
  }

//To update checkbox
  updateCheck(){
    ('input[type="checkbox"]').change(function () {
      let checked = false;
      console.log("check")
      if ((this.prop.checked) === true) {
          checked = true;
      }
      else if ((this.prop.checked) === false) {
          checked = false;
      }
      this.createCheck((this).prop("value"), checked);
    });
  } 

//For PUT method
createCheck(id, checked){
  let datas = {
    'completed': checked
  }
  fetch(POST+ id, {
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
    let listItems = this.state.data.map((data, i) => <li key={i}> {data.completed ? <input type="checkbox" checked  /> : <input type="checkbox" />
    }{data.title}</li>);

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text"
            name="todoBox"
            placeholder="Enter your new todo..."           
            ref="add"
          />    
          <h4> <ul> {listItems}</ul>  </h4>
        </form>
      </div>

    );
  }
}