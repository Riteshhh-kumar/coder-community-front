import React, { useState, useEffect } from "react";
import api from "../api/axiosConfig";
import { comment } from "postcss";

const PostTemplate = ({username}) => {
  const [posts, setPosts] = useState([
    {
      id: "ijdb",
      username: "bhsb",
      postData: "hbshbvks",
      comments: [{ id: "ijdb", username: "bhsb", comment: "hello" }],
      tags: ["bb"],
    },
    {
      id: "ij44db",
      username: "bhsb",
      postData: "hbshbvks",
      comments: [{ id: "ij44db", username: "bhsb", comment: "hello" }],
      tags: ["bb"],
    },
  ]);
  const [formData, setFormData] = useState({
    comment:""
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
  
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await api.get("/posts/allpost");
      console.log(res.data);
      setPosts(res.data.reverse());
    };
    fetchPosts();
    posts.reverse();
  }, []);

  const addComment = async (postId) => {
    try {
      var res = await api.post("posts/addComment", {
        username: username,
        body: formData.comment,
        id: postId
      });
      console.log(res.data)
    }
    catch(e) {
      console.log(e)
    }
  };

  return (
    <div className="mx-3 my-2 w-full">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-slate-100 shadow-lg rounded px-8 w-full py-6 mb-4"
        >
          <h2 className="text-xl font-semibold mb-2">{post.user}</h2>
          <p className="text-gray-700 mb-4">{post.description}</p>
          <div className="text-xs">
            Tags :{" "}
            {post.tags.map((tag) => (
              <span>
                <em>{tag} , </em>
              </span>
            ))}
          </div>
          <ul className="list-disc list-inside mb-4">
            {post.comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.user}:</strong> {comment.body}
              </li>
            ))}
          </ul>
          <div>
            <form onSubmit={(e) => {
              e.preventDefault()
              addComment(post.id)
            }}>
              <input
                type="text"
                name="comment"
                value={formData.comment}
                placeholder="Add a comment..."
                onChange={handleChange}
                className="bg-gray-200 focus:bg-white focus:outline-none rounded border border-gray-200 px-4 py-2 block w-full mb-4"
              />
              <button  type="submit">
                Comment
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostTemplate;
