import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import { UserProvider } from './context/user';



ReactDOM.render(
  <BrowserRouter>
    <UserProvider>
    <App />
    </UserProvider>
  </BrowserRouter>,
  document.getElementById('root')
);