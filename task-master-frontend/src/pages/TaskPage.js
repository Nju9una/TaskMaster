// src/components/TaskPage.js
import React from 'react';
import TaskList from './TaskList';
import './TaskPage.css';

const TaskPage = () => {
  return (
    <div>
      <h1>Tasks</h1>
      <TaskList />
    </div>
  );
};

export default TaskPage;
