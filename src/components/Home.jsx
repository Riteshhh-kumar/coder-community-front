import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostTemplate from "./PostTemplate";
import illustration from "../../public/Designer.png";

const Home = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />

        <div className="bg-gray-100 min-h-screen p-8 bg-gradient-to-r from-cyan-500 to-blue-500">
          <header className=" text-white p-8 rounded-lg mb-8 flex justify-between items-center">
            <img
              src="https://pensil-social.s3.ap-south-1.amazonaws.com/storage/community-logos/105434de-cc1e-4e29-8242-6a94238ca514.webp"
              className="backdrop-blur-3xl"
              alt="Coder Community Logo"
              style={{ height: "500px", width: "20000px", margin: "30px" }}
            />
          </header>

          {/* second layout          */}
          <div className="bg-gray-900 text-white py-20">
            <div className="container mx-auto flex flex-col md:flex-row items-center px-6">
              <div className="md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
                <img
                  src={illustration}
                  alt="Illustration"
                  className="max-w-full h-auto"
                />
              </div>
              <div className="md:w-1/2 md:pl-10">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  A New Way to Learn
                </h2>
                <p className="text-lg md:text-xl mb-6">
                  Coder Community is the best platform to help you enhance your
                  skills, expand your knowledge and prepare for technical
                  interviews.
                </p>
              </div>
            </div>

            </div>

            {/* first box */}
          <div className="flex  flex-nonwrap">


          
          <div className="bg-white p-6 rounded-lg shadow-md ml-16 w-80 mt-8 h-80">
            <h2 className="text-xl font-semibold mb-2">Start Exploring</h2>
            <p className="text-gray-600">
              Explore is a well-organized tool that helps you get the most out
              of LeetCode by providing structure to guide your progress towards
              the next step in your programming career.
            </p>
          </div>

          
            {" "}
            {/* Right section */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="bg-brown-500 rounded-full p-4">
                {/* Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-white"
                >
                  {/* Your icon SVG here */}
                </svg>
              </div>
              <div>
                {/* Heading */}
                {/* Paragraph */}
                <p className="text-gray-600 bg-white p-9 rounded-lg shadow-md  w-80  mb-60">
                <h2 className="text-xl text-black font-semibold">
                  Explore and expand your skills
                </h2>
                  Every idea has a first line of code. Prep for jobs and sharpen
                  your skills alongside a global community of developers. Access
                  the content you need to develop new skills – and land the job
                  you’ve dreamed of.
                  <a href="/business" className="text-blue-500 hover:underline">
                    Business Opportunities
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md w-80 mt-8 ml-16 w-64 mb-60">
              
              <div className="flex items-center space-x-4">
                
                <div>
                  {/* Heading */}
                  <h2 className="text-xl font-semibold">
                    Questions, Community & Contests
                  </h2>
                  {/* Paragraph */}
                  <p className="text-gray-600 ">
                    Every company is a tech company. We’re here to help ‘em all.
                    <a
                      href="/questions"
                      className="text-blue-500 hover:underline"
                    >
                      View Questions
                    </a>
                  </p>
                </div>
                </div>
              </div>
            


            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
