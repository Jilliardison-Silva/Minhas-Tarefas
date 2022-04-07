import React, { useState } from 'react';

import Button from "./Button";

import "./AddTask.css"

const AddTask = ({handleTaskAddition}) => { //Adicionar Tarefa
    const [inputData,setInputData] = useState("");

    const [inputInfo,setInputInfo] = useState('');

    const handleInputChangeTask = (e)=>{ //Manipulando alteração da entrada
        setInputData(e.target.value); //adicionando ao inputData o valor digitado no input, que esta sendo recebido pela variavel (e), estando o valor digitado na propriedade .target.value (Valor Alvo)
    };

    const handleInputChangeInfo = (ev)=>{
        setInputInfo(ev.target.value);
    };

    const handleAddTaskClick = () => {
        const msg = 'Necessário Preencher o campo'
        inputData === "" ? alert(`${msg} Nova Tarefa.`) :
        inputInfo === "" ? alert(`${msg} Info.`) : 
        handleTaskAddition(inputData, inputInfo);
        setInputData("");
        setInputInfo("");
        // se a entrada for diferente de "" chama a const com valor e seta a entrada como ''        
        
    };

    return ( 
        <div className='addTask-container'>
            <div>
                <input onChange={handleInputChangeTask} className='addTask-input' value={inputData}  type="text" placeholder='Nova Tarefa'/>
                <textarea onChange={handleInputChangeInfo} className='addTask-input' value={inputInfo}  type="text" placeholder='Info.'/>
            </div>

            <div className="addTask-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;