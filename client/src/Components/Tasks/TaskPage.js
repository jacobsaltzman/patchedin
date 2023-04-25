import React from "react";
import { useParams } from "react-router-dom";

function TaskPage(){

  const {taskId} = useParams();

  console.log(taskId)


  return (
    <div>
      <p> you've made it </p>
    </div>
  )
}

export default TaskPage;