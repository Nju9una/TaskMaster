import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required."),
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });
      const data = await res.json();

      if (data?.access_token) {
        toast.success(data.message);
        localStorage.setItem("session", JSON.stringify(data));
        navigate("/login");
      } else {
        toast.error(data.message);
      }
  },
});

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Sign Up
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Name
            </Label>
            <TextInput
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              helperText={formik.errors.name}
              color={formik.errors.name ? "failure" : undefined}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Email
            </Label>
            <TextInput
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              color={formik.errors.email ? "failure" : undefined}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <TextInput
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              color={formik.errors.password ? "failure" : undefined}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
          </div>
          <Button
            type="submit"
            isProcessing={formik.isSubmitting}
            className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
