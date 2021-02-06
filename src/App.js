import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/styles.scss";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Fragment>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  );
};

export default App;
