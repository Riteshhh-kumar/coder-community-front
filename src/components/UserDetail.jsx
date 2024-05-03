import React from "react";
import { Link } from "react-router-dom";
function UserDetail({isLoggedIn,user}) {
  if (!isLoggedIn) {
    return (
      <>
        <li>
          <Link to="/login" className="hover:underline">
            Login
          </Link>
        </li>
        <li>
          <Link to="/register" className="hover:underline">
            Register
          </Link>
        </li>
        <li></li>
      </>
    );
  } else
    return (
      <>
        <li>
          Welcome, { user}
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
