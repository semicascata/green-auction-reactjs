import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { loginUser, setLoading } from "../redux/actions/auth";
import Spinner from "../components/layout/Spinner";

export const Home = ({
  auth: { errors, isAuth, loading },
  loginUser,
  setLoading,
}) => {
  // credentials state
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  // validation
  const [validation, setValidation] = useState("");

  // credentials
  const { name, password } = user;

  // change values from form
  const changeCredentials = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // submit button function
  const submitCredentials = (e) => {
    e.preventDefault();
    setValidation("");

    // validation
    if (!name || !password) {
      setValidation("Please, fill in all fields!");
    }

    // login action
    setLoading();
    loginUser(user);

    setUser({
      name: "",
      password: "",
    });
  };

  // check if user is authenticate
  if (isAuth) {
    return <Redirect to="/contact" />;
  }

  // loading spinner
  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <form>
        <div className="auth-title">
          <h2>
            <i className="fas fa-sign-in-alt"></i> Login
          </h2>
        </div>

        {/* check if errors from state */}
        {errors && (
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            <strong>Error:</strong> {errors}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

        {/* empty fields validation */}
        {validation && (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Validation:</strong> {validation}
            <button
              type="button"
              className="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )}

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

Home.propTypes = {
  auth: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser, setLoading })(Home);
