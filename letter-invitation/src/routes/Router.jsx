import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import LoginPage from "../Pages/LoginPage";
import LetterPage from "../Pages/LetterPage";
import PrincipalPage from "../Pages/PrincipalPage";
import ErrorPage from "../Pages/ErrorPage";
import PublicRoutes from "./PublicRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LetterPage></LetterPage>}></Route>
      <Route element={<PublicRoutes></PublicRoutes>}>
        <Route path="/admin" element={<LoginPage></LoginPage>}></Route>
      </Route>

      <Route element={<ProtectedRoutes></ProtectedRoutes>}>
        <Route
          path="/admin/home"
          element={<PrincipalPage></PrincipalPage>}
        ></Route>
      </Route>

      <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
};

export default Router;
