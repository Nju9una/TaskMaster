// src/App.js
import React from 'react';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import Login from './pages/LoginPage';
import TaskPage from "./pages/TaskPage";
import ProjectPage from "./pages/ProjectPage";
import RegisterForm from "./pages/RegistrationPage";
import ProfilePage from "./pages/ProfilePage";
import Signup from './pages/SignupPage'; // Import Signup component

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<RegisterForm />} />
            <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
            <Route path="/tasks" element={<TaskPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
