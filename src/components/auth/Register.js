import React, { useState } from "react";

export const Register = () => {
  const [newUser, setUser] = useState({
    name: "",
    age: "",
    password: "",
    password2: "",
  });

  // credentials
  const { name, age, password, password2 } = newUser;

  // change values from form
  const changeSignUp = (e) => {
    setUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // submit button function
  const submitSignUp = async (e) => {
    e.preventDefault();

    // register action

    setUser({
      name: "",
      age: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className="card">
      <form>
        <div className="auth-title">
          <h2>
            <i className="fas fa-user-plus"></i> Register
          </h2>
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-user"></i> Username:
          </label>
          <input
            onChange={changeSignUp}
            placeholder="Username"
            type="text"
            className="form-control"
            name="name"
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-id-badge"></i> Age:
          </label>
          <input
            onChange={changeSignUp}
            placeholder="18"
            value={age}
            type="number"
            pattern="[0-200]"
            className="form-control"
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-key"></i> Password:
          </label>
          <input
            onChange={changeSignUp}
            type="password"
            className="form-control"
            name="password"
            value={password}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-key"></i> Confirm Password:
          </label>
          <input
            onChange={changeSignUp}
            type="password"
            className="form-control"
            name="password2"
            value={password2}
            required
          />
        </div>
        <hr />
        <p style={{ fontSize: "12px" }}>
          <i>*Password must be longer than or equal to 6 characters</i>
        </p>
        <div className="text-center">
          <button
            onClick={submitSignUp}
            type="submit"
            className="btn btn-success btn-block"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
