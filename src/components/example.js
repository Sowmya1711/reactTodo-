import React, { Component } from 'react';
//import { Todoscontainer } from './Todoscontainer.js';

const DESC = "https://jsonprovider.herokuapp.com/todos?limit=50&sort=id+desc";

export class Todo extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.handleSubmit.bind(this);
		this.state = {
			data: [],
			checked: true
		};
		this.handleChecked = this.handleChecked.bind(this);
	}

	handleChecked(event) {
		console.log("event", event);
		this.setState({ ischecked: !this.state.ischecked });
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
		//this.updateCheck()
	}
	/* updateCheck(){
		let txt;
        if (this.state.iscompleted) {
        txt = 'checked'
        } else {
        txt = 'unchecked'
		}
		console.log(txt)
	}   */
	render() {
		 let txt;
        if (this.state.ischecked) {
        txt = 'checked'
        } else {
        txt = 'unchecked'
		}
		console.log(txt)
		return (
			<div>
				<ul>
					<form onSubmit={this.onSubmit}>
						<input type="text"
							name="todoBox"
							placeholder="Enter your new todo..."
							ref="add"
						/>
					</form>
					{this.props.todos.map((value) => (
						<li> <h4>
							<input 
								type="checkbox" 
								onChange={this.handleChecked}
								checked={this.state.ischecked} 
								checked={value.ischecked} 
							/>
							 {/* <p>checkbox is {txt}</p>  */}
							{value.title}
						</h4> </li>
					))}
				</ul>
			</div>
		)
	}
}

