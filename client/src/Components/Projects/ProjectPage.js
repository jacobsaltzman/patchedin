import React from "react";
import { useParams } from "react-router-dom";
import TasksList from "../Tasks/TasksList";


function ProjectPage({projects}){

  const {projectId} = useParams();
  const projectArr = projects.filter((proj) => Number(proj.id) === Number(projectId))
  const project = projectArr[0];

  if (project) {
    const {id, title, tasks, progress, user, description, category} = project;



    return (
      <div className="individual-project-page">
        <div id="project-title">
        <h3>{title}</h3>
        <h5 className={category}> {category} </h5> 
        <p>By: {user.username}</p>
        </div>

        <div id="project-details">
        <h6>Details:</h6> <p>{description}</p>
        </div>
        
        <div className="progress-details">
        <h6>Progress Bar</h6> <p>{progress}</p>
        </div>

        <div id="project-tasks">
        <h6>Tasks:</h6>
        < TasksList projectId={id} tasks={tasks}/>
        </div>

      </div>
    );
  } else {
    return <p>Project not found. We're sorry for the inconvenience.</p>;
  }


}

export default ProjectPage;