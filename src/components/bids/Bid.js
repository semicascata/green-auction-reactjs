import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getBidsPerProduct, setWait } from "../../redux/actions/bids";
import NewBid from "./NewBid";
import Spinner from "../layout/Spinner";

export const Bid = ({
  bids: { bidsPerProduct, loading },
  getBidsPerProduct,
  setWait,
}) => {
  // props from Product
  const idParams = useParams();

  useEffect(() => {
    setWait();
    getBidsPerProduct(idParams.id);
  }, [getBidsPerProduct, setWait, idParams]);

  if (bidsPerProduct[0] === undefined) {
    return <Spinner />;
  }

  return (
    <div className="container bids-container">
      <h3>Make a bid!</h3>
      <ul className="list-group">
        <h4 className="list-group-item active">Bids:</h4>
        {bidsPerProduct[0] === undefined || bidsPerProduct[0].length === 0 ? (
          <li className="list-group-item">No bids for this product yet...</li>
        ) : (
          bidsPerProduct[0]
            .sort((a, b) => a.bid + b.bid)
            .map((bid) => (
              <li className="list-group-item" key={bid.id}>
                R$ {bid.bid.toFixed(2)}
              </li>
            ))
        )}
      </ul>
      <div>
        <button
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#newBid"
        >
          New Bid
        </button>
      </div>

      {/* modal  */}
      <NewBid />
    </div>
  );
};

Bid.propTypes = {
  bids: PropTypes.object.isRequired,
  getBidsPerProduct: PropTypes.func.isRequired,
  setWait: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bids: state.bids,
});

export default connect(mapStateToProps, { getBidsPerProduct, setWait })(Bid);
