// src/App.js
// import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import Login from './pages/LoginPage';
import TaskPage from "./pages/TaskPage";
import ProjectPage from "./pages/ProjectPage";
import RegisterForm from "./pages/RegistrationPage";
import "./App.css";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <div className="container">
 <h1>Task and Project Management</h1>
      <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            {<Route path="/projects" element={<ProjectPage />} />}
            {<Route path="/login" element ={<Login/>}/>}
            {<Route path="/registration" element ={<RegisterForm/>}/>}
            {<Route path="/tasks" element={<TaskPage />} />}
            {<Route path="/profile" element={<ProfilePage />} />}
          </Routes>
      </>
    </div>
  );
}
    
export default App;
