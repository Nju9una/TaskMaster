// src/components/ProjectItem.js
// src/components/ProjectItem.js
import React from 'react';
import TaskItem from './TaskItem';
// import 'src/App.css';


const ProjectItem = ({ project }) => {
  return (
    <li>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p>Due: {project.due_date}</p>
      <h4>Tasks:</h4>
      <ul>
        {project.tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </li>
  );
};

export default ProjectItem;
