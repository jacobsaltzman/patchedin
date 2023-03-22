import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';

function App() {





  return (
    <div className="App">
      <Navigation/>
      <div className='d-flex flex-column vh-100'>
        <Routes>
          <Route 
          path='/'
          element={<Home/>}
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
