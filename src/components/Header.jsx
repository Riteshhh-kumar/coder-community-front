import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDetail from "./UserDetail";

const Header = ({ isLoggedIn, user }) => {
  return (
    <header>
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button--> */}
            </div>
            <div className="flex flex-2 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex space-x-4 flex-shrink-0 items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              
                <div className="flex space-x-4">
                  <Link to="/" className="text-2xl font-bold text-white">
                    Coder Community
                  </Link>
                  <Link to="/" className="bg-gray-900  text-white rounded-md px-3 py-2 text-sm font-medium">
                    Posts
                  </Link>
                  
                </div>
              </div>
            </div>
            <div className="container mx-auto flex justify-between items-center"></div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              ></button>

              {/* <!-- Profile dropdown --> */}
              <div className="relative ml-3 text-white">
                <div>
                  <ul className="flex space-x-4">
                    <UserDetail isLoggedIn={isLoggedIn} user={user} />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="#"
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Team
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Calendar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
