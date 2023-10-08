import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { get_api_url } from "../../../../utils/getApiUrl";
import axios from "axios";

const LoginForm = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

  const submit = (data) => {
    const url = `${get_api_url()}/users/login`;
    axios
      .post(url, data)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem("token", res.data.token);
        toast.success(`Bienvenido: ${res.data.user.name}`);
        navigate("/admin/home");
      })
      .catch((err) => {
        if (err.response.data.error.statusCode === 422)
          toast.error("Credenciales inválidas");
      });
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="login__form">
      <div>
        <input
          {...register("login")}
          required="required"
          className="login__input"
          name="login"
          type="text"
          placeholder="USUARIO"
          autoComplete="off"
        />
        <label htmlFor="login"></label>
      </div>
      <div>
        <input
          {...register("password")}
          required="required"
          className="login__input"
          name="password"
          type="password"
          placeholder="CONTRASEÑA"
          autoComplete="off"
        />
        <label htmlFor="clave"></label>
      </div>
      <div>
        <button className="login__button">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
