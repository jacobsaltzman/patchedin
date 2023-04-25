import React from 'react';
import {Link} from 'react-router-dom'

function TasksCard({id, difficulty, description, completed}) {
  
  return (
    <Link to={`/tasks/${id}`} className="task-card" id={id}>
      <div className="task-info">
      <p className='description'>{description}</p>
      <p className='difficulty'>{difficulty}</p>
      <p className='completed'>{completed}</p>

      </div>

      </Link>
  );
}

export default TasksCard;