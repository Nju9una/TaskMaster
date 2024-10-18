// src/components/HomePage.js
import React, { useState } from 'react';
import { Home, CheckSquare, FolderKanban, UserCircle, LogIn } from 'lucide-react';
import './HomePage.css';

const NavBar = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = [
    { id: 'home', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { id: 'tasks', icon: <CheckSquare className="w-5 h-5" />, label: 'Tasks' },
    { id: 'projects', icon: <FolderKanban className="w-5 h-5" />, label: 'Projects' },
    { id: 'profile', icon: <UserCircle className="w-5 h-5" />, label: 'Profile' },
    { id: 'login', icon: <LogIn className="w-5 h-5" />, label: 'Login' }
  ];

  return (
    <header className="sticky top-0 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-green-600">Task Manager</span>
          </div>
          <nav className="flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`inline-flex items-center px-1 pt-1 text-sm font-medium 
                  ${activePage === item.id ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-green-600'}
                  transition-colors duration-200`}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Welcome to Task Manager
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Manage your tasks and projects efficiently with our intuitive platform.
              Stay organized, meet deadlines, and boost your productivity.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <button 
                className="rounded-md bg-green-600 px-8 py-3 text-lg font-semibold text-white shadow-sm hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <CheckSquare className="h-12 w-12 text-green-600" />
            <h2 className="mt-4 text-xl font-semibold text-gray-900">Task Management</h2>
            <p className="mt-2 text-center text-gray-600">Create, organize, and track your tasks with ease</p>
          </div>
          
          <div className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <FolderKanban className="h-12 w-12 text-green-600" />
            <h2 className="mt-4 text-xl font-semibold text-gray-900">Project Overview</h2>
            <p className="mt-2 text-center text-gray-600">Keep all your projects organized in one place</p>
          </div>
          
          <div className="relative flex flex-col items-center rounded-2xl bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <UserCircle className="h-12 w-12 text-green-600" />
            <h2 className="mt-4 text-xl font-semibold text-gray-900">Team Collaboration</h2>
            <p className="mt-2 text-center text-gray-600">Work together seamlessly with your team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;