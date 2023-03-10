import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import CardItem from "../pages/CardItem";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="card/:id" element={<PrivateRouter/>}>
          <Route path="" element={<CardItem />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
