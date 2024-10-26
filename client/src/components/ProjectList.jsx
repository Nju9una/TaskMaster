import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const session = JSON.parse(localStorage.getItem('session'));

    fetch(`${import.meta.env.VITE_SERVER_URL}/projects`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    .then((res) => res.json())
    .then((data) => setProjects(data));
    

  }, [])

  return (
    <div className="space-y-6">
      {Array.isArray(projects) ? (
        projects.map(project => (
          <ProjectItem key={project.id} {...project} />
        ))
      ) : (
        <p>No project available</p>

      )}
    </div>
  );
};

export default ProjectList;