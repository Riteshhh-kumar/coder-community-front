import React, { useState } from "react";
import { Link, redirect, useNavigate } from "react-router-dom"; // Import Link for navigation
import backgroundImg from "../assets/background.jpeg";
import api from "../api/axiosConfig";

const LoginPage = ({setIsLoggedIn,setUser}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log(formData);
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      var res = await api.post("user/login", {
        email: formData.email,
        username: formData.email,
        password: formData.password,
      });
      if (res.data == "") {
        console.log("AJI KHAALI HAI");
      } else {
        setIsLoggedIn(true);
        setUser(res.data);
        
      }
      console.log(res.data);
    } catch (error) {
      console.log("RAITA FAIL GAYA : ", error);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-white shadow-md rounded-lg px-8 py-8 sm:p-12 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="rememberMe"
              id="rememberMe"
              checked={formData.rememberMe}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm">
              Remember me
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>

        {/* New to Coder Community? Create Account link */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">New to Coder Community?</p>
          <Link to="/register" className="text-blue-500 hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
