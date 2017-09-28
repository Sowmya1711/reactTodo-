import React, { Component } from 'react';
//import React, { Component, PropTypes } from 'react';
//import { Todoscontainer } from './Todoscontainer.js';
//import {Checkbox} from './Checkbox.js';

const DESC = "https://jsonprovider.herokuapp.com/todos?limit=50&sort=id+desc";
const POST = "https://jsonprovider.herokuapp.com/todos?";

export class Todo extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.handleSubmit.bind(this);
		this.state = {
			data: [],
			isChecked: false,
			value: ''
		};
		this.toggleChange = this.toggleChange.bind(this)
	}

	toggleChange = (event, data) => {
		console.log(event.target.checked)
		console.log(event.target.id)
		
		this.createCheck()
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
	}

	//For PUT method
	createCheck(id,checked) {
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
		console.log(id)
	}

	render() {

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
							<input type="checkbox"
								//checked={this.state.isChecked}
								onChange={this.toggleChange}
								ref="check"
								defaultChecked={value.completed}
								id={value.id}
							/>
							{value.title}
						</h4> </li>
					))}

				</ul>
			</div>
		)

	}
}

