import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";

const TaskForm = ({addProject}) => {

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
      user_id: Yup.string().required("User_id is required"),
    }),
    initialValues: {
      name: "",
      description: "",
      user_id: "",
    },
    onSubmit: async (values, { resetForm }) => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/projects`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (data?.access_token) {
        toast.success(`Successfully added ${name} project`);
        addProject(values);
        resetForm();
      } else {
        toast.error("Failed to add Project");
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        type="name"
        name="name"
        placeholder="Project Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        color={formik.errors.name ? "failure" : undefined}
      />
      <textarea
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Description"
        name="description"
        value={formik.values.description}
        onChange={formik.handleChange}
        color={formik.errors.description ? "failure" : undefined}
        rows="3"
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

      <button
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        type="submit"
      >
        Add Project
      </button>
    </form>
  );
};

export default TaskForm;
