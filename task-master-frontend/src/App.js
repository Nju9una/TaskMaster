// src/App.js
// import React, { useState } from 'react';
import Home from "./pages/HomePage";
import Login from './pages/LoginPage';
import ProjectPage from "./pages/ProjectPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <>
        <h1>Task and Project Management</h1>
        <NavBar>
   
        </NavBar>
        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path='/tasks' element ={<Task/>}/> */}
            {<Route path="/projects" element={<ProjectPage />} />}
            {<Route path='/login' element ={<Login/>}/>}
          </Routes>
      </>
    </div>
  );
}
    
export default App;
