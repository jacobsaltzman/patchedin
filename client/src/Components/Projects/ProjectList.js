import React from 'react';
import ProjectCard from './ProjectCard';


function ProjectList(props) {
  const { projects } = props;

  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          title={project.title}
          description={project.description}
          type={project.type}
          progress={project.progress}
        />
      ))}
    </div>
  );
}

export default ProjectList;