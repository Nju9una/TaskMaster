// src/components/ProjectList.js
// src/components/ProjectList.js
import React from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  // set project data
  const projects = [
    {
      id: 1,
      title: "Task Manager App",
      description: "Create a task management system using Flask and React.",
      due_date: "2024-10-30",
      tasks: [
        {
          id: 1,
          title: "Design Database",
          description: "Design the database structure for tasks and projects.",
          due_date: "2024-10-15",
          priority: "High"
        },
        {
          id: 2,
          title: "Set Up Backend",
          description: "Set up the Flask backend with API endpoints.",
          due_date: "2024-10-17",
          priority: "Medium"
        }
      ]
    },
    {
      id: 2,
      title: "Marketing Campaign",
      description: "Plan and execute the marketing campaign for the app launch.",
      due_date: "2024-11-05",
      tasks: [
        {
          id: 3,
          title: "Create Ads",
          description: "Design and create marketing ads for social media.",
          due_date: "2024-10-25",
          priority: "Low"
        },
        {
          id: 4,
          title: "Set Budget",
          description: "Define budget and allocate resources for the campaign.",
          due_date: "2024-10-22",
          priority: "High"
        }
      ]
    }
  ];

  return (
    <div>
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;

