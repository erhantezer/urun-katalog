import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
    const currentUser = sessionStorage.getItem("token")
    return currentUser ? <Outlet /> : <Navigate to="/login" replace />
};

export default PrivateRouter;
