import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { fetchProducts, setWait } from "../../redux/actions/products";
import { connect } from "react-redux";
import Product from "./Product";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

export const Products = ({
  products: { productsList, errors },
  fetchProducts,
}) => {
  useEffect(() => {
    setWait();
    fetchProducts();
  }, [fetchProducts]);

  if (productsList[0] === undefined || !productsList) {
    return <Spinner />;
  }

  return (
    <div className="container products-container">
      <div className="new-product">
        <h4>Announce new product?</h4>
        <Link to="/newprod" className="btn btn-outline-success">
          New Product
        </Link>
      </div>
      <div className="row">
        {productsList[0] === undefined || productsList[0].length === 0 ? (
          <h1>No products available for bids today...</h1>
        ) : (
          productsList[0].map((product) => (
            <Product product={product} key={product.id} />
          ))
        )}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.object.isRequired,
  fetchProducts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { fetchProducts })(Products);
