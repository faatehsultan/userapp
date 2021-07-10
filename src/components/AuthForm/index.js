import React, { useState, useContext } from "react";
import "./style.css";
import { API_LOGIN } from "../../api";
import { LoginContext } from "../../Contexts/LoginContext";

export default function AuthForm() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { role, setRole, setUserFlag } = useContext(LoginContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    let result = await API_LOGIN(email, password);
    if (result.statusText === "OK" && typeof result.data === "string") {
      document.cookie = "USER_APP_USER_FLAG=true";
      document.cookie = `USER_APP_USER_ROLE=${role}`;
      setUserFlag(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <form
      className="authForm container px-4 py-5 d-flex flex-column align-items-stretch justify-content-evenly"
      onSubmit={handleLogin}
    >
      <div className="display-5 text-center" style={{ letterSpacing: "4px" }}>
        Login
      </div>
      <br />
      <br />
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="input__email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="input__email">Email</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          id="input__password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label htmlFor="input__password">Password</label>
      </div>
      <select
        className="form-select mb-2"
        aria-label="Default select example"
        value={role}
        onChange={(e) => {
          setRole(e.target.value);
        }}
      >
        <option value="1">User</option>
        <option value="2">Admin</option>
      </select>
      <div className="d-flex justify-content-start align-items-center">
        <button type="submit" className="btn btn-primary px-4 py-2">
          Login
        </button>
        {loading && (
          <div className="ms-4 spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
      </div>
      <div
        className="text-danger fw-bold text-center fs-5"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        Invalid Credentials!
      </div>
    </form>
  );
}
