import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [username, usernameUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const login = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      localStorage.setItem("user-info", JSON.stringify({ username, password }));
      window.location.href = "/home";
    }
  };
  const validation = () => {
    if (username === "" || username === null) {
      return false;
      toast.warning("Please enter username");
    }
    if (password === "" || password === null) {
      return false;
      toast.warning("Please enter password");
    }
    return true;
  }
  return (
    // <div className="container">
    //   Login Page
    //   <br />
    //   
    // </div>
    <div className="row">
      <div className="offset-lg-3 col-lg-6">
        <form onSubmit={login} className="container">
          <div className="card">
            <div className="card-header">
              <h2>User Login</h2>
            </div>
            <div className="card-body">
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input value={username} onChange={(e) => usernameUpdate(e.target.value)} className="form-control" />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input value={password} onChange={(e) => passwordUpdate(e.target.value)} className="form-control" type="password" />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">Submit</button>
              <Link to="/register" className="btn btn-success float-end">Register</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
