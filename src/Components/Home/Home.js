import React from "react";
import Footer from "../Shared/Footer/Footer";
import Games from "./../Games/Games";
import Banner from "./Banner";
import Reviews from "./Reviews";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <section>
      <div className="container">
        <Banner />
        <SecondSection />
        <Games />
        <Reviews />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
