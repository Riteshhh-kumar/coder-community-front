import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="bg-gray-900 min-h-screen  max-w-fit p-4">
        <div className="flex">
          <div className="flex flex-col  bg-gray-800 text-white w-48">
            <div className="p-0"></div>
            <div className="flex-grow">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 focus:outline-none block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/explore"
                    className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 focus:outline-none block"
                  >
                    Explore
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
