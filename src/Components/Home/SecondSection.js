import React from "react";
import homeSecond from "../../images/home-second.jpg";

const SecondSection = () => {
  return (
    <div className="row d-flex align-items-center my-5">
      <div className="col-lg-6">
        <img src={homeSecond} className="img-fluid w-100" alt="..." />
      </div>
      <div className="col-lg-6">
        <p>
          Video games are defined based on their platform, which include arcade
          video games, console games, and personal computer (PC) games. More
          recently, the industry has expanded onto mobile gaming through
          smartphones and tablet computers, virtual and augmented reality
          systems, and remote cloud gaming. Video games are classified into a
          wide range of genres based on their type of gameplay and purpose.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;
