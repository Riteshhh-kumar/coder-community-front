import React, { useState } from "react";
import backgroundImg from "../assets/background.jpeg";
import api from "../api/axiosConfig";

const RegistrationPage = (setIsLoggedIn) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    phone: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      var res = await api.post("user/register", {
        email: formData.email,
        username: formData.username,
        password: formData.password,
        name: formData.name,  
        phone: formData.phone,
        bio: formData.bio,
      });
      if (res.data == "") {
        console.log("AJI KHAALI HAI");
      } else {
        setIsLoggedIn.setIsLoggedIn(true);
      }
      console.log(res.data);
    } catch (error) {
      console.log("RAITA FAIL GAYA : ", error);
    }
    console.log(formData); // You can perform form submission or validation here
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="bg-white shadow-md rounded-lg px-8 py-8 sm:p-12 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-8">
          Join Our Community
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />

            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
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
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
            <label
              htmlFor="bio"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Bio
            </label>
            <input
              type="text"
              name="bio"
              id="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Enter your Bio"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
