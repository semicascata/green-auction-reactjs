import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { signUp, setLoading, clearErrors } from "../../redux/actions/auth";
import Spinner from "../layout/Spinner";
import { Redirect, useHistory } from "react-router-dom";

export const Register = ({
  auth: { errors, isAuth, loading },
  signUp,
  setLoading,
  clearErrors,
}) => {
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 500);
  }, [clearErrors]);

  const [newUser, setUser] = useState({
    name: "",
    age: 18,
    password: "",
    password2: "",
  });

  // validation
  const [validation, setValidation] = useState("");

  // credentials
  const { name, age, password, password2 } = newUser;

  // change values from form
  const changeSignUp = (e) => {
    setUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // history for redirection after signup
  const history = useHistory();

  // submit button function
  const submitSignUp = async (e) => {
    e.preventDefault();
    setValidation("");

    if (!name || !age || !password || !password2) {
      setValidation("Please, fill in all fields");
    }

    if (password !== password2) {
      setValidation("Passwords dont match");
    }

    // register action
    setLoading();
    signUp(newUser).then((res) => {
      // if the request is ok, will return a response of "true" and then redirect
      if (res) {
        history.push("/");
      }
    });

    setUser({
      name: "",
      age: 18,
      password: "",
      password2: "",
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
            <i className="fas fa-user-plus"></i> Register
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

        {/* check empty fields */}
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
            name="age"
            type="number"
            pattern="[0-200]"
            className="form-control"
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

Register.propTypes = {
  auth: PropTypes.object.isRequired,
  signUp: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { signUp, setLoading, clearErrors })(
  Register
);
