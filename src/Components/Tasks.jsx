import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskDeletion,handleTaskClick}) => {
    return (
        <>
            {tasks.map((task) => (
                // .map verrifica cada item da variavel
                <Task key={task.id} task={task} handleTaskDeletion={handleTaskDeletion} handleTaskClick={handleTaskClick}/>
            ))}
        </>
    )
}

export default Tasks;