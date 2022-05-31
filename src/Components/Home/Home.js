import React from "react";
import Footer from "../Shared/Footer/Footer";
import Banner from "./Banner";
import HomeGames from "./HomeGames";
import Reviews from "./Reviews";
import SecondSection from "./SecondSection";

const Home = () => {
  return (
    <section>
      <div className="container">
        <Banner />
        <SecondSection />
        <HomeGames />
        <Reviews />
      </div>

      <Footer />
    </section>
  );
};

export default Home;
