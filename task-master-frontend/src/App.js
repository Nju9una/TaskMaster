// src/App.js
// import React, { useState } from 'react';
import Home from './pages/HomePage';
// import Login from './pages/LoginPage';
import './App.css';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  // const [tasks, setTasks] = useState([]);

  // const addTask = (newTask) => {
  //   setTasks([...tasks, newTask]);
  // };

  return (
    <div className="App">
      <>
      <h1>Task and Project Management</h1>
        <NavBar>
          <Route path='/home' element ={<Home/>}/>
          {/* <Route path='/tasks' element ={</Task>}/> */}
          {<Route path='/projects' element ={<Home/>}/>}
          {/* {<Route path='/login' element ={<Login/>}/>} */}

        </NavBar>

      </>
    </div>
  );
}

export default App;
