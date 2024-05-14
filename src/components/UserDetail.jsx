import React from "react";
import { Link } from "react-router-dom";
function UserDetail({ setcookie,isLoggedIn, user,setUser }) {
  const logout = () => {
    setcookie('user','')
    setcookie('isLoggedIn', false)
    setUser(null)
  }
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
        <li>
          <button onClick={logout} >Logout</button>
        </li>
        
      </>
    );
}

export default UserDetail;
