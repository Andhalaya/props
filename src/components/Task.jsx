import React from "react";

const Task = ({id, text, completed, deleteTask, toggleComplete}) => {
    return (
        <div className='task' style={{textDecoration: completed ? 'line-through' : 'none'}}>
            <span className='taskText' onClick={() => toggleComplete(id)}>{text}</span>
            <button onClick={() => deleteTask(id)}>Eliminar</button>
        </div>
    )
}

export default Task;