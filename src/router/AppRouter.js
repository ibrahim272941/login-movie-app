import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Trailer from "../pages/Trailer";

import React from "react";
import Navbar from "../component/Navbar";

const AppRouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
