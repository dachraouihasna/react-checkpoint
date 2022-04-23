import React from "react";
import Todo from "./Todo";

function TodoList({ tasks, handleDone, deleteTask }) {
    return (
        <div>
            {tasks.map((task) => (
                <Todo
                    key={task.id}
                    task={task}
                    handleDone={handleDone}
                    deleteTask={deleteTask}
                />
            ))}
        </div>
    );
}

export default TodoList;
