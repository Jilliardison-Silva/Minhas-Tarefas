import React from 'react';
import {CgClose, CgInfo} from 'react-icons/cg'
import { useHistory } from 'react-router-dom';



import "./Task.css"


const Task = ({task, handleTaskDeletion, handleTaskClick}) => {

    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push({
            pathname: task.title,
            state: task.info,
        });
        // history.push(`/${task.title}`);
    }
    
    return ( 
        <div className='task-container' style={task.completed ? {borderLeft: '8px solid chartreuse', textDecoration:'line-through'}:{}}>
            <div className='task-title' onClick={()=>handleTaskClick(task.id)} >
                {task.title}
            </div>
            <div className='button-container'>
                <button className='remove-task-button' onClick={()=>handleTaskDeletion(task.id)}>
                    <CgClose/>
                </button>
                <button className='see-task-details-button' onClick={handleTaskDetailsClick}>               
                    <CgInfo/>
                </button>
            </div>
        </div>
     );
}
 
export default Task;