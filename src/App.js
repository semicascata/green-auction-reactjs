import React, { Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/scss/styles.scss";
import store from "./redux/store";
import PrivateRoute from "./components/routing/PrivateRoute";
import Register from "./components/auth/Register";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/layout/Navbar";
import Products from "./components/products/Products";
import NewProductForm from "./components/products/NewProductForm";
import Bid from "./components/bids/Bid";
import NewBid from "./components/bids/NewBid";

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
              <PrivateRoute exact path="/products" component={Products} />
              <PrivateRoute exact path="/newprod" component={NewProductForm} />
              <PrivateRoute exact path="/productbids/:id" component={Bid} />
              <PrivateRoute exact path="/newbid/:id" component={NewBid} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
