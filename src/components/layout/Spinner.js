import React from "react";

export const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading</span>
      </div>
    </div>
  );
};

export default Spinner;
