import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [id, idChange] = useState("");
  const [name, nameChange] = useState("");
  const [email, emailChange] = useState("");
  const [password, passwordChange] = useState("");
  const [gender, genderChange] = useState("");

  const navigate = useNavigate();

  const isValidated = () => {
    let isProcessing = true;
    let errorMessage = "Please enter the value in ";

    if (id === null || id === "") {
      isProcessing = false;
      errorMessage += "Username ";
    }
    if (name === null || name === "") {
      isProcessing = false;
      errorMessage += "Fullname ";
    }
    if (email === null || email === "") {
      isProcessing = false;
      errorMessage += "Email ";
    }
    if (password === null || password === "") {
      isProcessing = false;
      errorMessage += "Password ";
    }

    if (!isProcessing) {
      toast.warning(errorMessage);
      return false; // Return early if validation fails
    }

    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      toast.warning("Please enter a valid email");
      return false; // Return early if email is not valid
    }

    return true; // Return true only if all validations pass
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    if (isValidated()) {
      // Only proceed if validation passes
      let user = {
        id,
        name,
        email,
        password,
        gender,
      };

      try {
        const response = await fetch("http://localhost:8000/user", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          toast.success("Registration Successful");
          navigate("/login");
        } else {
          toast.error("Registration Failed");
        }
      } catch (error) {
        console.error("Error during registration:", error);
        toast.error("An error occurred during registration");
      }
    }
  };

  return (
    <div>
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleRegister} id="register">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Register Page</h1>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      User Name <span className="text-danger">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => idChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label>
                      Password<span className="text-danger">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => passwordChange(e.target.value)}
                      className="form-control"
                      type="password"
                    />
                  </div>
                </div>
                <div className="col-lg-6 pt-4">
                  <div className="form-group">
                    <label>
                      Full Name<span className="text-danger">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => nameChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 pt-4">
                  <div className="form-group">
                    <label>
                      Email Address<span className="text-danger">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => emailChange(e.target.value)}
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-lg-6 pt-4">
                  <div className="form-group">
                    <label className="pb-2">
                      Gender
                    </label>
                    <br />
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Male"
                        id="male"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => genderChange(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1"
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="Female"
                        id="female"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => genderChange(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2"
                      >
                        Female
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-footer">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <Link to="/login" className="btn btn-danger float-end">
                Back
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
