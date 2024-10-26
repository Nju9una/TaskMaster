import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";


const TaskForm = ({addTask}) => {

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      title: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
      status: Yup.string().required("Status is required"),
      due_date: Yup.string().required("Due_date is required"),
      user_id: Yup.string().required("Due_date is required"),
      project_id: Yup.string().required("Due_date is required"),
    }),
    initialValues: {
      title: "",
      description: "",
      status: "",
      due_date: "",
      project_id: "",
      user_id: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(taskData),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        toast.success(`Successfully added ${values.title} task`);
        addTask(data);
        resetForm();
      } else {
        toast.error(data.message || "Failed to add Task");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="text"
        name="title"
        placeholder="Task Title"
        value={formik.values.title}
        onChange={formik.handleChange}
        color={formik.errors.title ? "failure" : undefined}
      />
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        color={formik.errors.name ? "failure" : undefined}
        required
        rows="3"
      />

      <select
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={formik.values.status}
        name="status"
        onChange={formik.handleChange}
        color={formik.errors.status ? "failure" : undefined}
      >
        <option value="">Select Priority</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="date"
        name="due_date"
        value={formik.values.due_date}
        onChange={formik.handleChange}
        color={formik.errors.due_date ? "failure" : undefined}
      />

      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="user_id"
        name="user_id"
        value={formik.values.user_id}
        onChange={formik.handleChange}
        color={formik.errors.user_id ? "failure" : undefined}
        placeholder="User ID"
      />

      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="project_id"
        name="project_id"
        value={formik.values.project_id}
        onChange={formik.handleChange}
        color={formik.errors.project_id ? "failure" : undefined}
        placeholder="Project ID"
      />

      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        type="submit"
      >
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;