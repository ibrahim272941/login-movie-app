import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Trailer from "../pages/Trailer";

import React from "react";
import Navbar from "../component/Navbar";
import { auth } from "../auth/firebase-config";

const AppRouter = () => {
  // let path = useLocation().pathname;
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path={"/login-movie-app"} element={<Home />} />
          <Route path={"/"} element={<Home />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/trailer" element={<Trailer />} />
        </Routes>
      </Router>
    </div>
  );
};

export default AppRouter;
