import React from 'react';
import {Link} from 'react-router-dom'

function ProjectCard({id, title, description, category, progress, user}) {
  
  return (
    <Link to={`/projects/${id}`} className="project-card" id={id}>
      <div className={category}>
      <h2>{title}</h2>
      <p className='hidden-p'>{description}</p>
      <p className='category'>{category}</p>
      <p className='hidden-p'>{progress}</p>

      </div>

      </Link>
  );
}

export default ProjectCard;