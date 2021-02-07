import React, { useRef, useState } from "react";

export const Search = (props) => {
  // filter list
  const [list, setList] = useState([]);

  // array of bids
  const bidsList = props.bidsList;

  // search term
  const searchTerm = useRef("");

  const onChange = (e) => {
    const results = bidsList.filter(
      (bid) =>
        bid.user_name.toLowerCase() === searchTerm.current.value.toLowerCase()
    );

    setList(results);
  };

  return (
    <div
      className="modal fade"
      id="searchBar"
      aria-labelledby="searchBar"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content search-modal">
          <div className="modal-header">
            <h5 className="modal-title" id="searchBar">
              Search:
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
                  <input
                    onChange={onChange}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="searchTerm"
                    ref={searchTerm}
                  />
                </div>
              </div>
              <ul className="list-group">
                {list.length === 0 || list[0] === null ? (
                  <li className="list-group-item">Nothing found...</li>
                ) : (
                  list.map((bid) => (
                    <li className="list-group-item" key={bid.bid_id}>
                      Product: {bid.product_product} | R$ Bid:{" "}
                      {bid.bid_bid.toFixed(2)}
                    </li>
                  ))
                )}
              </ul>
            </form>
          </div>
          <div className="modal-footer">
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

export default Search;
