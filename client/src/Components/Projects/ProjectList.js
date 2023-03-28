import React from 'react';
import ProjectCard from './ProjectCard';


function ProjectList(props) {
  const { projects } = props;

  return (
    <div className="project-list">
      {projects ?
      projects.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          title={project.title}
          description={project.description}
          type={project.type}
          progress={project.progress}
        />
      ))
        :<h3>No projects yet.</h3>}


    </div>
  );
}

export default ProjectList;