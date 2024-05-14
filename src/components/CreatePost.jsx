import React, { useState } from "react";
import Popup from "reactjs-popup";
import api from '../api/axiosConfig'
function CreatePost({ username, communityname }) {
  
  const [formData, setFormData] = useState({
    description: "",
    tags: "",
    public: true,
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

  const createPost = async (e) => {
    e.preventDefault();
    if (communityname) {
      try {
        var res = await api.post("community/posts/create", {
          description: formData.description,
          username: username,
          tags: formData.tags,
          isPublic: formData.public ? "True" : "False",
          communityname:communityname
        });
        if (res.data == "") {
          console.log("AJI KHAALI HAI");
        } else {
          console.log(res.data)
        }
      } catch (error) {
        console.log("RAITA FAIL GAYA : ", error);
      }
      
    }
    else {
      try {
        var res = await api.post("posts/create", {
          description: formData.description,
          username: username,
          tags: formData.tags,
          isPublic:formData.public?"True":"False"
        });
        if (res.data == "") {
          console.log("AJI KHAALI HAI");
        } else {
          console.log(res.data)
        }
      } catch (error) {
        console.log("RAITA FAIL GAYA : ", error);
      }
    }
  };

  if(username!=null)
  return (
    <>
      <Popup
        trigger={
          <button className="flex items-center fixed bottom-3 right-3 gap-2 px-4 rounded-3xl py-2 text-white bg-indigo-600 rounded-lg duration-150 hover:bg-indigo-500 active:bg-indigo-700">
            {" "}
            Post{" "}
          </button>
        }
        modal
        nested
      >
        {(close) => (
          <div className="flex">
            <div
              style={{ width: "50rem", height: "40rem" }}
              className="p-5 bg-slate-400"
            >
              <div className="max-w-md mx-auto pt-4">
              <form onSubmit={createPost}>
          <div className="mb-6">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              name="description"
                      id="description"
              rows={10}
              value={formData.description}
                      onChange={handleChange}
                      
              placeholder="Post Description"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="tags"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Tags
            </label>
            <input
              type="text"
              name="tags"
              id="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="Enter your Tags"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out hover:bg-gray-100"
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              name="public"
                      id="public"
                      
              checked={formData.public}
              onChange={handleChange}
              className="mr-2 leading-tight"
            />
            <label htmlFor="public" className="text-gray-700 text-sm">
              Public
            </label>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
            >
              Post
            </button>
          </div>
        </form>
              </div>

              <div>
                <button
                  className="fixed top-5 right-80"
                  onClick={() => close()}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </>
  );
}

export default CreatePost;
