import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  registerBid,
  setWait,
  getBidsPerProduct,
  clearErrors,
} from "../../redux/actions/bids";
import { useParams } from "react-router-dom";

export const NewBid = ({
  bids: { errors },
  registerBid,
  setWait,
  getBidsPerProduct,
  clearErrors,
}) => {
  useEffect(() => {
    setTimeout(() => {
      clearErrors();
    }, 500);
  }, [clearErrors]);

  const [newBid, setBid] = useState({
    bid: "",
  });

  // id params
  const idParams = useParams();

  const { bid } = newBid;

  const changeBid = (e) => {
    setBid({ ...newBid, [e.target.name]: e.target.value });
  };

  const saveBid = (e) => {
    e.preventDefault();
    console.log(newBid);

    setWait();
    registerBid(idParams.id, newBid);
    getBidsPerProduct(idParams.id);
    setBid({
      bid: "",
    });
  };

  return (
    <div
      className="modal fade"
      id="newBid"
      aria-labelledby="newBid"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="newBid">
              New Bid:
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-row">
                <div className="col">
                  {errors && (
                    <div>
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
                    </div>
                  )}
                  <input
                    onChange={changeBid}
                    type="number"
                    className="form-control"
                    placeholder="Value"
                    name="bid"
                    value={bid}
                    required
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button onClick={saveBid} type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

NewBid.propTypes = {
  bids: PropTypes.object.isRequired,
  registerBid: PropTypes.func.isRequired,
  setWait: PropTypes.func.isRequired,
  getBidsPerProduct: PropTypes.func.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  bids: state.bids,
});

export default connect(mapStateToProps, {
  registerBid,
  setWait,
  getBidsPerProduct,
  clearErrors,
})(NewBid);
