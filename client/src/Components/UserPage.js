import React, { useEffect, useContext, useState } from "react";
import { UserContext } from "../context/user";


function UserPage({setErrors, onDeleteProject}) {
  const { currentUser } = useContext(UserContext);
  const [editableProjectId, setEditableProjectId] = useState(null);
  const [userProjects, setUserProjects] = useState([]);
  const [formData, setFormData] = useState({});


  useEffect(() => {
    if (currentUser) {
      setUserProjects(currentUser.projects);
    }
  }, [currentUser]);


  const handleEditClick = (projectId) => {
    const project = userProjects.find(p => p.id === projectId);
    setFormData({
      description: project.description,
      progress: project.progress
    });
    if (editableProjectId === projectId) {
      setEditableProjectId(null);
      setFormData({});
    } else {
      setEditableProjectId(projectId);
    }
  };

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSaveClick = (projectId) => {
    fetch(`/projects/${projectId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: formData.description,
        progress: formData.progress
      })
    })
    .then(res => {
      if (res.ok) {
        res.json().then(data => {
          const updatedProjects = userProjects.map(
            (p) => p.id === projectId ? { ...p, ...data } : p
          );
          setUserProjects(updatedProjects);
          setEditableProjectId(null);
        });
      } else {
        res.json().then(data => setErrors(Object.entries(data.errors).map(e => `${e[0]} ${e[1]}`)))
      }
    });
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
              <input
              type="text"
              name="description"
              value={
                formData.description !== undefined
                  ? formData.description
                  : project.description
              }
              onChange={(e) => handleChange(e)}
            />
            ) : (
              project.description
            )}</p>

            <p>Progress: {editableProjectId === project.id ? (
              <input
              type="range"
              min="0"
              max="100"
              step="1"
              name="progress"
              value={
                formData.progress !== undefined
                  ? formData.progress
                  : project.progress
              }
              onChange={(e) => handleChange(e)}
            />
            ) : (
              project.progress
            )}</p>

            <button onClick={() => handleEditClick(project.id)}>
              {editableProjectId === project.id ? "Nevermind" : "Edit"}
            </button>

            {editableProjectId === project.id && (
              <button onClick={() => handleSaveClick(project.id)}>
                Save
              </button>
)}
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