import axios from "axios";

export const register = async (formData) => {
  const response = await axios.post("api/auth/register", formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export const login = async (formData) => {
    const response = await axios.post("api/auth/login", formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  };