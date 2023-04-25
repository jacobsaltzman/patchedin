import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/user";


function UserPage({setErrors, onDeleteProject}) {
  const { currentUser } = useContext(UserContext);
  const [editableProjectId, setEditableProjectId] = useState(null);
  const [userProjects, setUserProjects] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setUserProjects(currentUser.projects);
    }
  }, [currentUser]);


  const handleEditClick = (projectId) => {
    setEditableProjectId(projectId);
  };

  const handleDeleteClick = (projectId) => {

      fetch(`/projects/${projectId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
      })
      .then(res => {
        if (res.ok) {
          const updatedProjects = currentUser.projects.filter(
            (project) => project.id !== projectId
          );
          setUserProjects(updatedProjects);
          onDeleteProject(projectId);
        } else {
          res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
        }
      })
  };

  if (!currentUser) {
    return <p>loading...</p>;
  }

  return (
    <div id="current-user-header">
      <h3>{currentUser.username}</h3>
      <p>Member since {currentUser.creationDate}</p>
      <h5>My Projects</h5>
      <ul>
        {userProjects.map((project) => (
          <li key={project.id}>
            <h4>{project.title}</h4>
            <p>Category: {project.category}</p>
            <p>Description: {editableProjectId === project.id ? (
              <input type="text" value={project.description} onChange={(e) => {
                // TODO: Implement logic to update the project's description
              }} />
            ) : (
              project.description
            )}</p>
            <p>Progress: {editableProjectId === project.id ? (
              <input type="text" value={project.progress} onChange={(e) => {
                // TODO: Implement logic to update the project's progress
              }} />
            ) : (
              project.progress
            )}</p>
            <button onClick={() => handleEditClick(project.id)}>
              {editableProjectId === project.id ? "Save" : "Edit"}
            </button>
            <button onClick={() => handleDeleteClick(project.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserPage;