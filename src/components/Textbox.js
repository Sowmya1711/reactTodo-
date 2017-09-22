import React, { Component } from 'react';

export class Textbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
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

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}
             <Textbox todos={this.state.todos} createTask={this.createTask.bind(this)} />
        </div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Enter new todo" ref="createInput" onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}/>
                {/* <button>Create</button> */}
                {this.renderError()}
            </form>
        );
    }
    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });
        this.setState({ todos: this.state.todos });
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } 
        else if (_.find(this.props.todos, todo => todo.task === task)) {
        return 'Task already exists.';
        } 
        else {
            return null;
        }
    }
}

