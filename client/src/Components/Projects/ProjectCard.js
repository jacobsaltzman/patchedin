import React from 'react';
import {Link} from 'react-router-dom'

function ProjectCard({id, title, description, category, progress, user}) {
  
  console.log(user)
  //also add creator user data

  return (
    <Link to={`/projects/${id}`} className="project-card" id={id}>
      <div className={category}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p className='category'>{category}</p>
      <p>{progress}</p>

      </div>

      </Link>
  );
}

export default ProjectCard;