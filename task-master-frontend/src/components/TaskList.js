// src/components/TaskList.js
// src/components/TaskList.js
// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';
import '../App.css'; 


const TaskList = () => {
  // set task data
  const tasks = [
    {
      id: 1,
      title: "Complete React Project",
      description: "Finish the task management React project.",
      due_date: "2024-10-20",
      priority: "High"
    },
    {
      id: 2,
      title: "Meeting with Team",
      description: "Discuss progress and next steps in the project.",
      due_date: "2024-10-18",
      priority: "Medium"
    },
    {
      id: 3,
      title: "Prepare for Demo",
      description: "Create slides and prep demo for the task management app.",
      due_date: "2024-10-22",
      priority: "Low"
    }
  ];

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;


