import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [username, usernameUpdate] = useState("");
  const [password, passwordUpdate] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  });

  const login = (e) => {
    e.preventDefault();
    if (validation()) {
      fetch("http://localhost:8000/user/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          console.log(resp);
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Login Success");
              sessionStorage.setItem("username", username);
              navigate("/");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to : " + err.message);
        });
    }
  };
  const validation = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please enter username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please enter password");
    }
    return result;
  };
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
                <input
                  value={username}
                  onChange={(e) => usernameUpdate(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  value={password}
                  onChange={(e) => passwordUpdate(e.target.value)}
                  className="form-control"
                  type="password"
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
              <Link to="/register" className="btn btn-success float-end">
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
