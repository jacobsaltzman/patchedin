import React, {useState} from "react";
import ProjectCard from './ProjectCard';
import ProjectCreate from './ProjectCreate';


function ProjectList({props, onAddProject, setErrors}) {

  const [isSeen, setIsSeen] = useState(true);

console.log(props)

  function handleIsSeen(e){
    setIsSeen(!isSeen)
  }

  return (
    <div className="project-page">
      <button id="create-project-button" onClick={handleIsSeen}>{isSeen? 'New Project?': 'Nevermind'}</button>
      {isSeen? <div></div>: <ProjectCreate onAddProject={onAddProject} setErrors={setErrors} />}
      {props ?
      props.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          title={project.title}
          description={project.description}
          category={project.category}
          progress={project.progress}
          user={project.user}
        />
      ))
        :<h3>No projects yet.</h3>}


    </div>
  );
}

export default ProjectList;