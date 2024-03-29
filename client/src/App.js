import React, { useEffect, useState, useContext } from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import About from './Components/About';
import SignUp from './Components/Signup';
import Login from './Components/Login';
import UserPage from './Components/UserPage';
import { UserContext } from './context/user';
import ProjectList from './Components/Projects/ProjectList'
import ProjectPage from './Components/Projects/ProjectPage';
import logo2 from './images/PatchedInLogo2.png';
import logo from './images/PatchedInLogo.png'
import TaskPage from './Components/Tasks/TaskPage'


function App() {

  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [errors, setErrors] = useState(false);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    // auto-login
    fetch("/me")
      .then((r) => {
        if (r.ok) {
          return r.json().then((user) => {
            setCurrentUser(user);
          });
        }
        throw new Error(`HTTP error: ${r.status}`);
      })
      .catch((error) => {
        console.error("Error during auto-login:", error);
      });
  }, [setCurrentUser]); 


  useEffect(()=> {
    fetch("/projects")
    .then(res => {
      if(res.ok){
        res.json()
        .then((data) =>{
          setProjects(data)
          setErrors(false)
        })
      }else {
        res.json().then(data => setErrors(data.errors))
      }
    })
    
  }, []);


  function onAddProject(newProject){
   // update global projects list
   setProjects([...projects, newProject])

   // update user's projects list
   const updatedUser = { ...currentUser, projects: [...currentUser.projects, newProject] }
   setCurrentUser(updatedUser)
  }

  function onDeleteProject(deletedProjectId){
    const updatedProjects = projects.filter((project) => project.id !== deletedProjectId)

  // update global projects list
  setProjects(updatedProjects)

  }

  function onUpdateProject(updatedProject){
    const updatedProjects = projects.map((project) => {
      if (project.id === updatedProject.id) {
        return updatedProject;
      } else {
        return project;
      }
    });
    setProjects(updatedProjects);
  }

  function updateProjectTasks(projectId, newTasks) {
    setProjects(prevProjects => prevProjects.map(project => {
      if (project.id === projectId) {
        return {
          ...project,
          tasks: newTasks
        };
      } else {
        return project;
      }
    }));
  }


  return (
    <div className="App">
      <Navigation logo2={logo2}/>
      {errors?errors.map(e => <h6 style={{color:'red'}}>{e.toUpperCase()}</h6>):null}
      <div className='d-flex flex-column vh-100'>
        <Routes>
          <Route 
          path='/'
          element={<Home logo={logo}/>}
          />
          <Route
          path='/signup'
          element={<SignUp />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route 
        path='/users/:id'
        element={<UserPage setErrors={setErrors} onDeleteProject={onDeleteProject} onUpdateProject={onUpdateProject}/>}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/projects'
            element={<ProjectList props={projects} onAddProject={onAddProject} setErrors={setErrors}/>}
          />
          <Route
            path='/projects/:projectId'
            element={<ProjectPage updateProjectTasks={updateProjectTasks} projects={projects}/>}
          />
          <Route
            path='/projects/:projectId/tasks/:taskId'
            element={<TaskPage />}
          />

        </Routes>
        
          <div className='footer mt-auto'>
          <Footer/>
          </div>
      </div>

    </div>
  );
}

export default App;
