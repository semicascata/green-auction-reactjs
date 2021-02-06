import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { logoutUser } from "../../redux/actions/auth";

export const Navbar = ({ auth: { isAuth }, logoutUser }) => {
  const logout = () => {
    logoutUser();
  };

  const guestLinks = (
    <Fragment>
      <Link to="/" className="nav-link active">
        Login
      </Link>
      <Link to="/signup" className="nav-link">
        Sign Up
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <Link to="/products" className="nav-link active">
        Products
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <Link onClick={logout} className="nav-link" to="/">
        Logout
      </Link>
    </Fragment>
  );

  const navLinks = () => {
    if (isAuth) {
      return authLinks;
    } else {
      return guestLinks;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="navbar-brand">
        <i className="fas fa-seedling"></i> The Green Auction | Job Challange
      </div>
      {/* toggle btn */}
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">{navLinks()}</div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
