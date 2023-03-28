import React from 'react';
import {Link} from 'react-router-dom'

function ProjectCard({id, title, description, category, progress}) {
  
  console.log(category, progress)
  //also add creator user data

  return (
    <Link to={`/projects/${id}`} className="project-card" id={id}>
      <div className='project-details'>
      <h2>{title}</h2>
      <p>{description}</p>
      </div>

      </Link>
  );
}

export default ProjectCard;