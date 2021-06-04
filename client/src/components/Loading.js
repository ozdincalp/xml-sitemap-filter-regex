import React from "react";

const Loading = () => {
  return (
    <div className="loading mt-5">
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <div className="spinner-grow spinner-grow-sm" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
