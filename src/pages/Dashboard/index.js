import React, { useContext } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";

export default function Dashboard() {
  const { role, setUserFlag } = useContext(LoginContext);

  const handleLogout = () => {
    document.cookie =
      "USER_APP_USER_FLAG=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "USER_APP_USER_ROLE=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    setUserFlag(false);
  };

  return (
    <div className="dashboard d-flex justify-content-center align-items-center py-5">
      <div className="container p-5">
        <div className="display-6 text-center mb-2">Dashboard</div>
        <p className="text-center">
          Please use the links below to navigate throughout the app
        </p>
        <br />
        <br />

        {role === "1" ? (
          <div className="row text-white">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center px-5 py-3">
              <Link to="/" className="btn btn-primary fs-5 w-100 py-2">
                Home
              </Link>
            </div>
          </div>
        ) : (
          <div className="row text-white">
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center px-5 py-3">
              <Link to="/" className="btn btn-primary fs-5 w-100 py-2">
                Home
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center px-5 py-3">
              <Link to="/" className="btn btn-primary fs-5 w-100 py-2">
                All Users
              </Link>
            </div>
            <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center px-5 py-3">
              <Link to="/" className="btn btn-primary fs-5 w-100 py-2">
                Deactivated Users
              </Link>
            </div>
          </div>
        )}
        <button className="btn logoutBtn fw-bold" onClick={handleLogout}>
          Logout <i className="bi bi-power"></i>
        </button>
      </div>
    </div>
  );
}
