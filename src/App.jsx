import React, { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom';


import "./App.css"

import AddTask from './Components/AddTask';
import Header from './Components/Header';
import Tasks from "./Components/Tasks"
import TaskDetails from "./Components/TaskDetails"

const App = () => {

  const[tasks, setTasks] = useState([]);

  useEffect(()=>{

     const load = ()=>{
         const tarefas = JSON.parse(window.localStorage.getItem('tarefas'))
         setTasks(tarefas)
     };

     load();

  },[]);   //useEffect Verifica se variavel da lista ouve alteração e execulta codigo todas as vezes que a mesma é alterada, sendo assincrona (execulta tambem em paralelo ao codigo, ao mesmo tempo)

    const handleTaskAddition = (taskTitle, taskInfo) => {
        const newTasks = [
            ...tasks,{
                title:taskTitle,
                id:uuidv4(), // gerando id random
                completed: false,
                info:taskInfo,
            },];
        
        window.localStorage.setItem('tarefas', JSON.stringify(newTasks));
        setTasks(newTasks);
    };

    const handleTaskDeletion = (taskId) =>{
        const newTasks = tasks.filter((task)=> task.id !== taskId);

        window.localStorage.setItem('tarefas', JSON.stringify(newTasks));

        setTasks(newTasks);
        // função que precisa do id da tarefa para poder reescrever tarefas existentes exceto tarefa selecionada
    };

    const handleTaskClick = (taskId) =>{
        const newTasks = tasks.map(task =>{
            //verificando cada tarefa e gerando condição
            if(task.id === taskId) return {
                ...task, completed: !task.completed
            }; // se task.id for igual ao taskId, retorna o inverso do completed do taskId
            return task;
        });
        window.localStorage.setItem('tarefas', JSON.stringify(newTasks));
        setTasks(newTasks)
    };

    return ( 
      <Router>
          <div className='container' >
              <Route 
              path="/" 
              exact 
              render={()=>(
                <>
                  <Header title={'Minhas Tarefas'} />
                  <AddTask handleTaskAddition={handleTaskAddition}/>
                  <Tasks tasks={tasks} handleTaskDeletion={handleTaskDeletion} handleTaskClick={handleTaskClick} />
                </>
                  )} 
              />
              <Route path="/:taskTitle"  exact component={TaskDetails}
              />
              {/* somente quando for chamado o parametro taskTitle o Route vai apresentar na tela o componente TaskDetails */}
          </div>
      </Router>
  );
}

export default App;
