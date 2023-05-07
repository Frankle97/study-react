import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Profile from "./Profile";
import React from "react";

function App() {
  return (
    <div>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile/velopert">velopert Profile</Link>
          </li>
          <li>
            <Link to="/profile/gildong">gildong profile</Link>
          </li>
        </ul>
        <hr/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
