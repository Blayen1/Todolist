import React, { Fragment, useState } from "react";
import "./App.css";
import { Todolist } from "./Todolist";

export type FilterButtonNameType='active' | 'all' | 'completed'


function App() {

 
  
    const shapka1 = 'Tasks'
    


    let  [tasks1 ,setTasks] = useState([
      { id: 1, title: "HTML&CSS", isDone: true },
      { id: 2, title: "JS", isDone: true },
      { id: 3, title: "ReactJS", isDone: false },
      { id: 4, title: "ReactJS", isDone: false }
      
      
  ]
)
const removeTask = (taskId:number) =>{
  
  tasks1 = tasks1.filter(el => el.id !== taskId)
  setTasks(tasks1)
}





  return (
    <div className="App">
      <Todolist 
      shapka1={shapka1} 
      tasks={durshlag}
      removeTask={removeTask}
      tasksButton={tasksButton}
      />

      
    </div>


  );
}

export default App;


























