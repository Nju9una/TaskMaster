import { Button, Label, TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: Yup.object().shape({
      email: Yup.string().required("Email is required"),
      password: Yup.string().required("Password is required"),
    }),
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      console.log(data)
      

      if (data?.access_token) {
        toast.success(data.message);

        localStorage.setItem("session", JSON.stringify(data));

        navigate("/");
      } else {
        toast.error(data.message);
      }
    },
  });
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Login
        </h2>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          {/* Email Field */}
          <div className="relative">
            <Label value="Your email" />
            <TextInput
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.errors.email}
              color={formik.errors.email ? "failure" : undefined}
              placeholder="Email"
              className="w-full px-10 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <TextInput
              type="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              helperText={formik.errors.password}
              color={formik.errors.password ? "failure" : undefined}
              className="w-full px-10 py-3 bg-gray-50 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            isProcessing={formik.isSubmitting}
            className="w-full py-3 bg-blue-500 text-white rounded-md font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </Button>
          <p>
            Don't have an account{" "}
            <Link
              className="bg-white text-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              to="/signup"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
