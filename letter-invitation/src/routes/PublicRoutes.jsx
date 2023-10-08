import React from "react";
import { Navigate, Outlet } from "react-router";

const PublicRoutes = () => {
  if (!localStorage.getItem("token")) {
    return <Outlet></Outlet>;
  } else {
    return <Navigate to={"/admin/home"} />;
  }
};

export default PublicRoutes;
