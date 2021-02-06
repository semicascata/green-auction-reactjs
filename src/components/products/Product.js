import React from "react";
import PropTypes from "prop-types";
import bidImg from "../../assets/images/bid.png";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  // change first string letter to uppercase
  const editString = (string) => {
    if (string === undefined) {
      return;
    }
    const lowerCase = string.toLowerCase();
    return lowerCase.replace(/^./, lowerCase[0].toUpperCase());
  };

  return (
    <div className="card product-card">
      <img src={bidImg} alt="product-bid" className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title" key={product.id}>
          Product: {editString(product.product)}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Initial Bid: R$ {product.initialBid.toFixed(2)}
        </h6>
        <p className="card-text">
          <Link
            to={{
              pathname: `/productbids/${product.id}`,
            }}
            className="btn btn-success"
          >
            New Bid!
          </Link>
        </p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
