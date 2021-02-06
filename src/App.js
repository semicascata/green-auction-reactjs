import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/styles.scss";
import store from "./redux/store";
import Register from "./components/auth/Register";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Register} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
