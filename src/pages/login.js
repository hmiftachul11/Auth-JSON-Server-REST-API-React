import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="container">
      Login Page
      <br />
      <Link to="/register" className="btn btn-primary mt-3">Register</Link>
    </div>
  );
};

export default LoginPage;
