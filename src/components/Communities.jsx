// src/components/Sidebar.js

import React from 'react';
import Sidebar from './Sidebar';


const communities = [
  { name: "JavaScript Community", members: 0, logo: "javalogo.jpeg" },
  { name: "Python Community", members: 0, logo: "pythonlogo.jpeg" },
  { name: "Java Community", members: 0, logo: "javalogo.jpeg" },
  { name: "C/CPP Community", members: 0, logo: "clogo.jpeg" },
  { name: " PHP Community", members: 0, logo: "PHPlogo.svg.png" },
  // Add more communities as needed
];

const CommunityCard = ({ name, members, logo }) => (
  <div className="bg-white p-4 ml-16 w-64 mr-4 mb-10 rounded-lg shadow-md">
    <img src={logo} alt={`${name} Logo`} className="w-12 h-12 mx-auto mb-4" />
    <h2 className="text-xl font-bold">{name}</h2>
    <p className="text-gray-500">{members} Members</p>
    <button className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
      Join
    </button>
  </div>
);


const Communities = () => {
  return (
    <>
      <div className="flex">
      <Sidebar />
      <div className="flex min-h-screen flex-wrap">
            {communities.map((community) => (
              <CommunityCard key={community.name} {...community} />
            ))}
          </div>
      </div>
    </>
  );
};

export default Communities;
