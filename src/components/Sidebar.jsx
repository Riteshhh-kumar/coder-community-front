import React from "react";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <>
      <div className="bg-gray-800  w-full max-w-32">
        <div className="flex">
          <div className="flex flex-col-reverse bg-gray-800 text-white w-45">
            <div className="p-1"></div>
            <div className="flex-grow">
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="w-full py-3 px-6 bg-gray-800 hover:bg-gray-600 focus:outline-none block"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/explore"
                    className="w-full py-3 px-6 bg-gray-800 hover:bg-gray-600 focus:outline-none block"
                  >
                    Explore
                  </Link>
                </li>
                <li>
                  <Link
                  to="/post"
                  className="w-full py-3 px-6 bg-gray-800 hover:bg-gray-600 focus:outline-none block"
                  >
                    Post
                  </Link>
                </li>
                <li>
                  <Link
                to="/explore"
                className="w-full py-3 px-6 bg-gray-800 hover:bg-gray-600 focus:outline-none block"
                  >
                community
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