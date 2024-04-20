import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Communities from "./components/Communities";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { useState } from "react";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState(null)

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header  isLoggedIn={ isLoggedIn} user={user} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Communities />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/posts" element={<Posts />} />
          <Route
            path="/login"
            element={
              isLoggedIn ? <Home /> : <Login setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            }
          ></Route>
          <Route path="/register" element={isLoggedIn?<Home/>:<Registration setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<Registration />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div><Footer></Footer>
    </Router>
  );
}

export default App;
