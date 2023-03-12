import React from 'react';
import { Route, Routes } from "react-router-dom"
import './App.css';
import Home from './Components/Home';

function App() {





  return (
    <div className="App">
      <header>Header</header>
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
