// src/App.js
import React, { useState } from 'react';
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/HomePage";
import Login from './pages/LoginPage';
import TaskPage from "./pages/TaskPage";
import ProjectPage from "./pages/ProjectPage";
import ProfilePage from "./pages/ProfilePage";
import toast from 'react-hot-toast';
import Signup from './pages/SignupPage'; // Import Signup component
import { stringify } from 'postcss';

function App() {
  const navigate = useNavigate();

  const [session, setSession] = useState(
    JSON.parse(localStorage.getItem('session'))
  );

  const handleLogout = () => {
    localStorage.removeItem('session');

    setSession(null);
    toast.success("Successfully logged out")
    navigate("/login")
  };

  const handleLogin = (data) => {
    localStorage.setItem("session", JSON,stringify(data));
    setSession(data);
    navigate("/")
  }
  return (
    <>
        <NavBar session={session} onLogout={handleLogout}/>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/login" element={<Login onLogin ={handleLogin} />} />
              <Route path="/signup" element={<Signup />} />
              {/* Add Signup Route */}
              <Route path="/tasks" element={<TaskPage />} />
              <Route
                path="/profile"
                element={<ProfilePage user={session ? session.user : null}/>} />
            
            </Routes>
          </main>
        </div>
    </>
  );
}

export default App;
