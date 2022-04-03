import React from "react";

const NotFound = () => {
  return (
    <div className="container">
      <img
        src={require("../../images/error404.png")}
        className="img-fluid w-100"
        alt=""
      />
    </div>
  );
};

export default NotFound;
