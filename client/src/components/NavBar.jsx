import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, CheckSquare, FolderKanban, UserCircle, LogIn, UserPlus } from 'lucide-react'; 

const NavBar = () => {
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', path: '/' },
    { id: 'tasks', icon: CheckSquare, label: 'Tasks', path: '/tasks' },
    { id: 'projects', icon: FolderKanban, label: 'Projects', path: '/projects' },
    { id: 'profile', icon: UserCircle, label: 'Profile', path: '/profile' },
    { id: 'login', icon: LogIn, label: 'Login', path: '/login' },
    { id: 'signup', icon: UserPlus, label: 'Sign Up', path: '/signup' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 font-bold text-xl text-green-600">
            Task Manager
          </Link>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors hover:text-green-600
                    ${isActive ? 'text-green-600' : 'text-gray-600'}`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
