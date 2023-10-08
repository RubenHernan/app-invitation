import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import "./styles/styles.css";
import LoginForm from "./Molecules/LoginForm";

const Login = () => {
  return (
    <div className="login__container">
      <div className="login__box">
        <h1>Admin</h1>
        <LoginForm></LoginForm>
      </div>
    </div>
  );
};

export default Login;
