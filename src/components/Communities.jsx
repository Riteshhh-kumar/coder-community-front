// src/components/Sidebar.js

import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import api from "../api/axiosConfig";
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

var username

const handleSubmit = async (e) => {
  e.preventDefault();
  const communityname = e.target.value;

  if(username!=null){try {
    var res = await api.post("community/join", { username: username , communityname: communityname  })
    console.log(res.data)
  } catch (error) {
    
  }}
alert("You have successfully joined the community");
}
const CommunityCard = ({ community }) => (
  <div className="bg-white p-4 ml-16 w-64 mr-4 mb-10 rounded-lg shadow-md">
    <img src={community.logo} alt={`${community.name} Logo`} className="w-12 h-12 mx-auto mb-4" />
    <h2 className="text-xl font-bold">{community.name}</h2>
    {/* <p className="text-gray-500">{members} Members</p> */}
    <Join community={community} />
  </div>
);
function Join({ community }) {
  if(!community.members.includes(username))
  return (
      <>
      <button onClick={handleSubmit} value={community.name} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
      Join
    </button></>
    )
  else {
    var name= `/${community.name}`
    return(
      <>
        <div className='my-4'>
        <Link to={{pathname:name,state:{community:community}}}  className="bg-blue-500 text-white  px-4 py-2 m rounded-md hover:bg-blue-600 transition duration-300">
      View
        </Link>
      </div>
      </>
    )
  }
}
const Communities = ({ user }) => {
  const getPosts = async () => {
    try {
      var res = await api.get("/community/getall");
      setCommunities(res.data);
    }
    catch (err) {
      console.log("Error")
    }
  }
  username = user
  const [communities,setCommunities]= useState([])
  useEffect(() => {
    getPosts()
  },[]);
  
  return (
    <>
      <div className="flex">
      <Sidebar />
      <div className="flex min-h-screen flex-wrap">
            {communities.map((community) => (
              <CommunityCard key={community.name} community={community} />
            ))}
          </div>
      </div>
    </>
  );
};
export default Communities;
