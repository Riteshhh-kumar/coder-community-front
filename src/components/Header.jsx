import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserDetail from "./UserDetail";

const Header = ({isLoggedIn,user}) => {
  return (
    <header   className="bg-blue-500 py-4 px-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h1 className="text-2xl font-bold">Coder Community</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <UserDetail isLoggedIn={isLoggedIn} user={user} />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
