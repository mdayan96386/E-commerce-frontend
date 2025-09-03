import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { user, isLoading, isError, message } = useSelector(
    (state) => state.auth
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Passwords Not Match!!");
    } else {
      dispatch(registerUser(formData));
    }
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
      <h1 className="text-center text-2xl font-black">Register</h1>

      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 p-4 rounded-sm my-5"
      >
        <input
          className="border border-gray-400 p-1 px-2 w-full rounded-md my-2"
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          className="border border-gray-400 p-1 px-2 w-full rounded-md my-2"
          type="email"
          placeholder="Enter Email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <input
          className="border border-gray-400 p-1 px-2 w-full rounded-md my-2"
          type="password"
          placeholder="Enter Password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <input
          className="border border-gray-400 p-1 px-2 w-full rounded-md my-2"
          type="password2"
          placeholder="Confirm Password"
          name="password2"
          value={password2}
          onChange={handleChange}
          required
        />
        <button
          typeof="submit"
          className="bg-green-400 py-2 px-6 w-full rounded-md my-2 text-white font-bold hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
