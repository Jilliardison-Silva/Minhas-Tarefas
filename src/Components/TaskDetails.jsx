import React from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import Button from './Button'
import Header from './Header'

import "./TaskDetails.css"


const TaskDetails = () => {
    const params = useParams();
    // useParams esta retornando o valor armazenado no historico, sendo usado para pegar task.Title que esta sendo adicionar no click do info
    const history = useHistory();
    console.log(history.location)

    const handleBackButtonClick = () =>{
        history.goBack();
        //usando o historico para retornar onde estava
    };

    return ( 
        <>
            <Header title={'Info.'}/>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                
                <h2>{params.taskTitle}</h2>
                <p>{history.location.state}</p>
            </div>
        
        </>
     );
}
 
export default TaskDetails;