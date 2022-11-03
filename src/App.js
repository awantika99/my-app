

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './New/Main';
import Sidebar from './New/Sidebar';
import Register from './New/Register';
import Login from './New/Login';
import View from './New/View';
import Re from "./New/Re";
import Edit from './New/Edit';
 import {  Routes,Route} from "react-router-dom"


function App() {
  return (
  <>
    
 <Main/>
    <Routes>
    <Route path='/' element={<Sidebar />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
       <Route path='/view' element={<View/>} />
      <Route path='/re' element={<Re/>} />
      <Route path='/edit' element={<Edit/>} />
    </Routes> 
     
  </>
  );
}

export default App; 






