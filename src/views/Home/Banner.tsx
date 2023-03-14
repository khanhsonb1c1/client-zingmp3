import React from "react";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataListSlider } from "../../data/listSlider";
import Slider from "react-slick";

Banner.propTypes = {};

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    rtl: true,
    arrows: false,
  };

  return (
    <div className="home-page__slider">
      <div className="slider__items">
        <Slider {...settings}>
          {dataListSlider.map((item) => (
            <div key={item.id} className="slider__item">
              <img src={item.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Banner;
