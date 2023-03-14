import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import Recently from "./Recently";
import Trending from "./Trending"
import TheNewSongs from "./TheNewSongs";
import Singer from "./Singer";
import Idol from "./Idol";
import TopRanker from "./TopRanker";
import BannerCategory from "./BannerCategory";
import Footer from "./Footer";

HomePage.propTypes = {};

function HomePage() {
  return (
    <div>
      <section className="home-page">
       <Banner/>
       <Recently/>
       <Trending/>
       <TheNewSongs/>
       <Singer/>
       <BannerCategory/>
       <Idol/>
       <TopRanker/>
       <Footer/>
       
      </section>
    </div>
  );
}

export default HomePage;
