import React from "react";
import { PropagateLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <PropagateLoader color="#E63946" />
    </div>
  );
};

export default Loading;
