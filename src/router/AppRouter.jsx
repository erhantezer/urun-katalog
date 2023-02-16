import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route />
        <Route />
        <Route /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
