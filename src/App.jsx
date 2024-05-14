import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Communities from "./components/Communities";
import Posts from "./components/Posts";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { useState,useEffect } from "react";
import ViewCommunity from "./components/ViewCommunity";
import Footer from "./components/Footer";
import { useCookies } from "react-cookie";

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies,setcookie]=useCookies(['user','isLoggedIn'])

  const [user, setUser] = useState(null)

  useEffect(() => {
    setUser(cookies.user)
    setIsLoggedIn(cookies.isLoggedIn)
  }, [setcookie]);
  


  return (
    <Router>
      <div className="flex flex-col  max-h-screen">

        <Header setcookie={setcookie} isLoggedIn={ isLoggedIn} user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Communities />} />
          <Route path="/communities"
            element={
              isLoggedIn ? <Communities user={user} /> : <Login setcookie={setcookie} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/:communityname" element={<ViewCommunity user={cookies.user} />} />
          <Route path="/posts" element={<Posts username={user}/>} />
          <Route
            path="/login"
            element={
              isLoggedIn ? <Home /> : <Login setcookie={setcookie} setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
            }
          ></Route>
          <Route path="/register" element={isLoggedIn?<Home/>:<Registration setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
          <Route path="/" element={<Registration />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
