import axios from "axios";

// backend url
const URL = "http://localhost:8000";

// user register service
const register = async (userData) => {
  const response = await axios.post(`${URL}/signup`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(`${URL}/login`, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

// exporting funcions
const authServices = {
  register,
  login,
};

export default authServices;
