import React, { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);



  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("session"));

    if(!session) return;
    

    fetch(`${import.meta.env.VITE_SERVER_URL}/tasks?user_id=${session.user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <div className="space-y-6">
      {tasks.length > 0 ? (
        tasks.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))
      ) : (
        <p>No task available</p>
      )}
    </div>
  );
 
};

export default TaskList;
