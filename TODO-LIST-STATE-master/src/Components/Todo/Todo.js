import React from "react";
import "../../App.css";
function Todo({ task, handleDone, deleteTask }) {
    return (
        <div>
            <h1 className={task.done ? "done" : "undone"}>{task.task}</h1>
            <button onClick={() => handleDone(task.id)}>v</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
    );
}

export default Todo;
