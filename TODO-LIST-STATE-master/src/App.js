import React, { Component } from "react";

import AppCount from "./Components/Counter/AppCount";
import AddTask from "./Components/Todo/AddTask";
import TodoList from "./Components/Todo/TodoList";

export default class App extends Component {
    state = {
        tasks: [
            { task: "Do Homework", done: false, id: 1 },
            { task: "Eat", done: false, id: 2 },
            { task: "Sleep", done: false, id: 3 },
        ],
    };
    //Add Task
    addTask = (task) => {
        const newTask = {
            task,
            done: false,
            id: Math.random(),
        };
        this.setState({
            tasks: [...this.state.tasks, newTask],
        });
    };
    //Delete Task
    deleteTask = (id) => {
        this.setState({
            tasks: this.state.tasks.filter((el) => el.id != id),
        });
    };

    //Done/Undone Task
    handleDone = (id) => {
        this.setState({
            tasks: this.state.tasks.map((el) =>
                el.id == id ? { ...el, done: !el.done } : el
            ),
        });
    };
    render() {
        return (
            <div>
                <TodoList
                    tasks={this.state.tasks}
                    handleDone={this.handleDone}
                    deleteTask={this.deleteTask}
                />
                <AddTask addTask={this.addTask} />
            </div>
        );
    }
}

//Function Component
// const App()=>{
//   return (
//     <div>App</div>
//   )
// }
