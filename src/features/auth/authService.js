import axios from "axios";

const base_url = 'https://e-commerce-tdq7.onrender.com'

export const register = async (formData) => {
  const response = await axios.post(`${base_url}/api/auth/register`, formData);
  localStorage.setItem("user", JSON.stringify(response.data));
  return response.data;
};

export const login = async (formData) => {
    const response = await axios.post(`${base_url}/api/auth/login`, formData);
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  };