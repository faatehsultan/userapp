import React from "react";
import "./style.css";
import { AuthForm } from "../../components";

function Login() {
  return (
    <div className="login py-5 d-flex justify-content-center align-items-center">
      <AuthForm />
    </div>
  );
}

export default Login;
