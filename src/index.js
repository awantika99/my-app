/*import React from "react";
import  ReactDOM   from "react-dom";
import "./ToDo/Todo.css";
import Todo from "./ToDo/Todo";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Todo />);*/



import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


