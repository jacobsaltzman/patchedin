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


function App() {

  const { setCurrentUser } = useContext(UserContext);
  const [errors, setErrors] = useState(false);
  const [projects, setProjects] = useState([]);

  console.log("errors:" + errors + " projects: " + projects)

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


  return (
    <div className="App">
      <Navigation/>
      <div className='d-flex flex-column vh-100'>
        <Routes>
          <Route 
          path='/'
          element={<Home/>}
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
        element={<UserPage />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/projects'
            element={<ProjectList props={projects}/>}
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
