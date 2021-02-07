import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addProduct, setWait } from "../../redux/actions/products";
import Spinner from "../layout/Spinner";

export const NewProductForm = ({
  products: { wait, errors },
  addProduct,
  setWait,
}) => {
  const [newProduct, setProduct] = useState({
    product: "",
    initialBid: "",
  });

  // history for redirection after signup
  const history = useHistory();

  const { product, initialBid } = newProduct;

  const changeProduct = (e) => {
    setProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // add product action
    setWait();
    addProduct(newProduct).then((res) => {
      if (res) {
        history.push("/products");
      }
    });

    setProduct({
      product: "",
      initialBid: "",
    });
  };

  if (wait) {
    return <Spinner />;
  }

  return (
    <div className="card">
      <form>
        <div className="auth-title">
          <h2>
            <i className="fas fa-archive"></i> New Product:
          </h2>
        </div>
        <div className="form-group">
          <label>
            <i className="fas fa-signature"></i> Product Name:
          </label>
          <input
            onChange={changeProduct}
            type="text"
            className="form-control"
            name="product"
            value={product}
            required
          />
        </div>

        <div className="form-group">
          <label>
            <i className="fas fa-money-bill"></i> Initial Bid:
          </label>
          <input
            onChange={changeProduct}
            type="number"
            className="form-control"
            name="initialBid"
            value={initialBid}
            required
          />
        </div>

        <div className="text-center">
          <button
            onClick={onSubmit}
            type="submit"
            className="btn btn-success btn-block"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products,
});

export default connect(mapStateToProps, { addProduct, setWait })(
  NewProductForm
);
