import React from 'react';
import {Link} from 'react-router-dom'

const difficultyMap = {
  0: { label: 'N/A', color: 'blue' },
  1: { label: 'Easy', color: 'green' },
  2: { label: 'Medium', color: 'yellow' },
  3: { label: 'Hard', color: 'orange' },
  4: { label: 'Extreme', color: 'red' },
};

function TasksCard({id, difficulty, description }) {

  const { label, color } = difficultyMap[difficulty];
  
  return (
    <Link to={`/tasks/${id}`} className="task-card" id={id}>
      <div className="task-info">
      <p className='description'>{description}</p>
      <p className='difficulty' style={{ color }}>{label}</p>

      </div>

      </Link>
  );
}

export default TasksCard;