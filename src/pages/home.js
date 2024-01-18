import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand mr-5 pr-5" to='#'>
            Tachul
          </Link>

          <div className="collapse navbar-collapse ml-5 pl-5" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to='#'>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='#'>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='#'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link bg-danger rounded text-white" to='/login'>
                Log Out
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-center min-vh-100">
          <div className="text-center">
            <h1>Welcome to Tachul's</h1>
            <h1>Authentication Project</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
