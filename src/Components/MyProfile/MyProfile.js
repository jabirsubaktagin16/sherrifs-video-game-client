import React from "react";
import Footer from "../Shared/Footer/Footer";
import MyOrders from "./MyOrders/MyOrders";
import ProfileCard from "./ProfileCard/ProfileCard";

const MyProfile = () => {
  return (
    <div>
      <div className="container my-4">
        <div className="row g-4">
          <div className="col-md-4">
            <ProfileCard />
          </div>
          <div className="col-md-8">
            <MyOrders />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyProfile;
