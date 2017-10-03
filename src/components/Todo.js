import React, { Component } from 'react';

const DESC = "https://jsonprovider.herokuapp.com/todos?limit=50&sort=id+desc";
const POST = "https://jsonprovider.herokuapp.com/todos/";

export class Todo extends Component {
	constructor(props) {
		super(props);
		this.onSubmit = this.handleSubmit.bind(this);
		this.state = {
			data: [],
			value: '',
		};
		this.toggleChange = this.toggleChange.bind(this);
	}

	toggleChange = (event) => {
		this.createCheck(event.target.id, event.target.checked);
	}

	//for POST method
	handleSubmit(e) {
		let datt = {
			title: e.target.todoBox.value,
			completed: false,
			userID: 1
		}
		e.preventDefault();
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
	createCheck(id, checked) {
		let data = {
			completed: checked
		};
		fetch(POST + id, {
			method: 'PUT',
			mode: 'CORS',
			body: JSON.stringify(data),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then(res => {
			return res;
		}).catch(err => err);
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
					{this.props.todos.map((value, i) => (
						<li key={i}> <h4>
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

