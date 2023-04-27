import React, {useState} from "react";
import TaskCreate from "../Tasks/TaskCreate";
import TasksCard from "../Tasks/TasksCard";

function TasksList({projectId, tasks, updateProjectTasks}){

  const [isSeen, setIsSeen] = useState(true);
  const [allTasks, setAllTasks] = useState(tasks)

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }

  function onAddTask(newTask){
    const updatedTasks = [...allTasks, newTask];
    setAllTasks(updatedTasks);
    updateProjectTasks(projectId, updatedTasks)
  }
  

  return(
    <div>
       <button id="create-project-button" onClick={handleIsSeen}>{isSeen? 'New Task?': 'Nevermind'}</button>
        {isSeen? <div></div>: <TaskCreate onAddTask={onAddTask} id={projectId}/>}
  
      <div className="task-list">
      {allTasks ?
        allTasks.map(task => (
          <TasksCard
            key={task.id}
            id={task.id}
            description={task.description}
            difficulty={task.difficulty}
            />
          ))
          :<h3>No tasks yet.</h3>}
      </div>
    </div>
  )
}

export default TasksList;