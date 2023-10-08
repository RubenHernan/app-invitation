import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  if (localStorage.getItem("token")) {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to={"/admin"} />;
  }
};

export default ProtectedRoutes;
