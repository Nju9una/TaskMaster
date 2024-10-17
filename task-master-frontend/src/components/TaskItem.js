// src/components/TaskItem.js
// src/components/TaskItem.js
// src/components/TaskItem.js
import React from 'react';
import '../App.css';

const TaskItem = ({ task }) => {
  return (
    <li>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {task.due_date}</p>
      <p>Priority: {task.priority}</p>
    </li>
  );
};

export default TaskItem;
