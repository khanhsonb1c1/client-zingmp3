import React from "react";
import PropTypes from "prop-types";
import Banner from "./Banner";
import Recently from "./Recently";
import Trending from "./Trending"
import TheNewSongs from "./TheNewSongs";

HomePage.propTypes = {};

function HomePage() {
  return (
    <div>
      <section className="home-page">
       <Banner/>
       <Recently/>
       <Trending/>
       <TheNewSongs/>
      </section>
    </div>
  );
}

export default HomePage;
