import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectCreate from './ProjectCreate';


function ProjectList({props, onAddProject, setErrors}) {
  const { projects } = props;

  return (
    <div className="project-page">
      <ProjectCreate onAddProject={onAddProject} setErrors={setErrors} />
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