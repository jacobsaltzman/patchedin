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

function App() {

  const { setCurrentUser } = useContext(UserContext);
  const [errors, setErrors] = useState(false);

  console.log(errors + " line 17")

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
          console.log(data)
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
        </Routes>
          <div className='footer mt-auto'>
          <Footer/>
          </div>
      </div>

    </div>
  );
}

export default App;
