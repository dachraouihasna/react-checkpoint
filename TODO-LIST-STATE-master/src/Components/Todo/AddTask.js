import React, { Component } from "react";

export default class AddTask extends Component {
    state = {
        task: "",
    };
    handleTask = (e) => {
        this.setState({ task: e.target.value });
    };
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleTask} />
                <button onClick={() => this.props.addTask(this.state.task)}>
                    Add Task
                </button>
            </div>
        );
    }
}
