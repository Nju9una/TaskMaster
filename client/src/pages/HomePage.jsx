import { Home, CheckSquare, FolderKanban, UserCircle, LogIn, Clock, Users } from 'lucide-react';
import NavBar from '../components/NavBar';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
    <Icon className="h-12 w-12 text-green-600 mb-4" />
    <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const HomePage = () => {
  const features = [
    {
      icon: CheckSquare,
      title: "Task Management",
      description: "Create, organize, and track your tasks with ease"
    },
    {
      icon: FolderKanban,
      title: "Project Overview",
      description: "Keep all your projects organized in one place"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work together seamlessly with your team"
    },
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Monitor time spent on tasks and projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Welcome to Task Manager
            </h1>
            <p className="text-xl leading-8 mb-10 max-w-3xl mx-auto">
              Manage your tasks and projects efficiently with our intuitive platform.
              Stay organized, meet deadlines, and boost your productivity.
            </p>
            <button 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Feature Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;