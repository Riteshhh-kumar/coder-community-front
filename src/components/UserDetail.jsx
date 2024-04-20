import React from "react";
import { Link } from "react-router-dom";
function UserDetail({isLoggedIn,user}) {
  if (!isLoggedIn) {
    return (
      <>
        
          <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Login
          </Link>
        
        
          <Link to="/register" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
            Register
          </Link>
        
    
      </>
    );
  } else
    return (
      <>
        <li>
          Welcome, { user.username}
        </li>
        <li>
        <Link to="/communities" className="hover:underline">
          Communities
        </Link>
        </li>
      </>
    );
}

export default UserDetail;
