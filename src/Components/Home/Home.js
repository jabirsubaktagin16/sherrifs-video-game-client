import React from "react";
import Banner from "./Banner";
import Reviews from "./Reviews";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <section className="container" id="top-banner">
      <Banner />
      <SecondSection />
      <Reviews />
    </section>
  );
};

export default Home;
