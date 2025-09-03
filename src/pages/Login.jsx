import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/auth/authSlice";

const Login = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, {
        position: "bottom-center",
        theme: "dark",
      });
    }
  }, [user, isError, message]);

  if (isLoading) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-gray-500">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-center text-2xl font-black">Login</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-4 rounded-sm my-5"
      >
        <input
          className="border border-gray-400 p-1 px-2 w-full rounded-md my-2"
          type="email"
          placeholder="Enter Email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          className="border border-gray-400 p-1 px-2 w-full rounded-md my-2"
          type="password"
          placeholder="Enter Password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="bg-green-400 py-2 px-6 w-full rounded-md my-2 text-white font-bold hover:bg-green-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
