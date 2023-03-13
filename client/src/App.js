import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Components/Home';
import Navigation from './Components/Navigation';

function App() {





  return (
    <div className="App">
      <Navigation/>
      <div className='App-Body'>
        <Routes>
          <Route 
          path='/'
          element={<Home/>}
          />


        </Routes>
      </div>

    </div>
  );
}

export default App;
