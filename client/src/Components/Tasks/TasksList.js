import React, {useState} from "react";
import TaskCreate from "../Tasks/TaskCreate";
import TasksCard from "../Tasks/TasksCard";

function TasksList({projectId, tasks}){

  const [isSeen, setIsSeen] = useState(true);
  const [allTasks, setAllTasks] = useState([tasks])

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }

  function onAddTask(newTask){
    setAllTasks([...allTasks, newTask])
  }
  

    console.log("Project num: " + projectId)
    console.log("Tasks: " + allTasks)


  return(
    <div>
       <button id="create-project-button" onClick={handleIsSeen}>{isSeen? 'New Task?': 'Nevermind'}</button>
        {isSeen? <div></div>: <TaskCreate onAddTask={onAddTask} id={projectId}/>}
      <p>check check</p>

      <div id="task-list">
      {allTasks ?
        allTasks.map(task => (
          <TasksCard
            id={task.id}
            description={task.description}
            difficulty={task.difficulty}
            completed={task.completed}
            />
          ))
          :<h3>No tasks yet.</h3>}
      </div>
    </div>
  )
}

export default TasksList;