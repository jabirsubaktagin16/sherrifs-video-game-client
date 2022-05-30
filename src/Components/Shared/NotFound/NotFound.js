import React from "react";
import error404 from "../../../images/error404.png";

const NotFound = () => {
  return (
    <div className="container">
      <img src={error404} className="img-fluid w-100" alt="" />
    </div>
  );
};

export default NotFound;
