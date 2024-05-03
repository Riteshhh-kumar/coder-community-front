import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { useLocation, useParams } from 'react-router'
import api from '../api/axiosConfig'

function ViewCommunity({user}) {
  const name = useParams().communityname
  var username
  
  
    const getCommunity = async () => {
      try {
        var res = await api.get(`/community/${name}`);
        setCommunity(res.data);
        console.log(res.data)

      }
      catch (err) {
        console.log("Error")
      }
    }
    username = user
    const [community, setCommunity] = useState([])
    useEffect(() => {
      getCommunity()
    }, []);
  
  const CommunityPosts = ({community })=>{
    if(community.posts){
      return (
        <>
          <div className="mx-3 my-2 w-full">
            {community.posts.map((post) => (
              <div key={post.id} className="bg-slate-100 shadow-lg rounded px-8 w-full py-6 mb-4">
                <h2 className="text-xl font-semibold mb-2">{post.user}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className='text-xs'>
                  Tags : {post.tags.map((tag) => (
                    <span >
                      <em>{tag} ,  </em>
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
                <input
                  type="text"
                  placeholder="Add a comment..."
                  className="bg-gray-200 focus:bg-white focus:outline-none rounded border border-gray-200 px-4 py-2 block w-full mb-4"
                  onChange={(e) => addComment(post.id, e.target.value)}
                />
              </div>
            ))}
          </div></>);
    }
    else {
      return (
        <>
          Post in community to view it
          Post in community to view it
          Post in community to view it
          Post in community to view it
          Post in community to view it
          Post in community to view it
          Post in community to view it
          Post in community to view it
        </>
      );
    }
  }
  return (
      <>
      <div className="flex">
        <Sidebar />
        <div>
        <CommunityPosts community={community}/>

        </div>
        <div>
          
        </div>
      </div>
      </>
  )
}

  export default ViewCommunity;