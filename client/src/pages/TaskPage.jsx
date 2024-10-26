import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';

const TaskPage = () => {

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Tasks</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Add New Task</h2>
            <TaskForm addTask={addTask}/>
          </div>
        </div>
        <TaskList />
      </div>
    </div>
  );
};

export default TaskPage;