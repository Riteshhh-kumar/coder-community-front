import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostTemplate = () => {
    const [posts, setPosts] = useState([{ "id": "ijdb", "username": "bhsb", "postData": "hbshbvks", "comments": [{"id": "ijdb", "username": "bhsb","comment":"hello"}]}]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get('https://your-api-endpoint.com/posts');
//       setPosts(res.data);
//     };

//     fetchPosts();
//   }, []);

  const addComment = (postId, comment) => {
    axios.post(`https://your-api-endpoint.com/posts/${postId}/comments`, { comment });
  };

  return (
    <div className="max-w-md mx-auto">
      {posts.map((post) => (
        <div key={post.id} className="bg-white shadow-md rounded px-8 py-6 mb-4">
          <h2 className="text-xl font-semibold mb-2">{post.username}</h2>
          <p className="text-gray-700 mb-4">{post.postData}</p>
          <ul className="list-disc list-inside mb-4">
            {post.comments.map((comment) => (
              <li key={comment.id}>
                <strong>{comment.username}:</strong> {comment.comment}
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Add a comment..."
            className="bg-gray-200 focus:bg-white focus:outline-none rounded border border-gray-200 px-4 py-2 block w-full mb-4"
            onChange={(e) => addComment(post.id, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default PostTemplate;