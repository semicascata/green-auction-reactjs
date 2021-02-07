import React from "react";

export const Search = (props) => {
  console.log(props);
  // const editSearchTerm = (e) => {
  //   this.setState({ searchTerm: e.target.value });
  // };

  // const dynamicSearch = () => {
  //   console.log(this.state.props.user_name);
  //   return this.state.props.filter((obj) =>
  //     obj.user_name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
  //   );
  // };

  return (
    <div
      className="modal fade"
      id="searchBar"
      aria-labelledby="searchBar"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
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
                    // onChange={dynamicSearch}
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    name="searchTerms"
                    // value={editSearchTerm}
                    required
                  />
                </div>
              </div>
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
