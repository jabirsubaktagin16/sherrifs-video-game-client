import React from "react";
import onlineGames from "../../../images/online-games.png";

const Banner = () => {
  return (
    <div className="row d-flex align-items-center">
      <div className="col-lg-6 order-last order-lg-first">
        <h1 style={{ fontSize: "3.5rem" }}>
          Get your favorite games with{" "}
          <span className="red-text">Sherrif's Video Game.</span>
        </h1>
        <p>
          A video game or computer game is an electronic game that involves
          interaction with a user interface or input device - such as a
          joystick, controller, keyboard, or motion sensing device - to generate
          visual feedback. This feedback is shown on a video display device,
          such as a TV set, monitor, touchscreen, or virtual reality headset.
        </p>
        <div className="d-grid gap-2 d-md-block">
          <button className="sherrif-button">Explore Now</button>
        </div>
      </div>
      <div className="col-lg-6">
        <img src={onlineGames} className="img-fluid w-100" alt="..." />
      </div>
    </div>
  );
};

export default Banner;
