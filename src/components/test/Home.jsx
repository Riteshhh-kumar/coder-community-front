import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostTemplate from "./PostTemplate";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar/>

        <div className="bg-gray-100 min-h-screen p-8">
          <header className=" text-white p-8 rounded-lg mb-8 flex justify-between items-center">
            <img
              src="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/community-logos/105434de-cc1e-4e29-8242-6a94238ca514.webp"
              alt="Coder Community Logo"
              style={{ height: "500px", width: "20000px", margin: "30px" }}
            />
          </header>
          

          
        </div>
      </div>
    </>
  );
};




export default Home;
