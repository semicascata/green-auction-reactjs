import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  // credentials
  const { name, password } = user;

  // change values from form
  const changeCredentials = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // submit button function
  const submitCredentials = (e) => {
    e.preventDefault();

    // login action

    setUser({
      name: "",
      password: "",
    });
  };

  return (
    <div className="card">
      <form>
        <div className="auth-title">
          <h2>
            <i className="fas fa-sign-in-alt"></i> Login
          </h2>
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-user"></i> Username:
          </label>
          <input
            onChange={changeCredentials}
            type="text"
            className="form-control"
            name="name"
            value={name}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-key"></i> Password:
          </label>
          <input
            onChange={changeCredentials}
            type="password"
            className="form-control"
            name="password"
            value={password}
            required
          />
        </div>

        <div className="text-center">
          <button
            onClick={submitCredentials}
            type="submit"
            className="btn btn-success btn-block"
          >
            Sign In
          </button>
          <hr />
          New user? <Link to="/signup">Sign up!</Link>
        </div>
      </form>
    </div>
  );
};

export default Home;
