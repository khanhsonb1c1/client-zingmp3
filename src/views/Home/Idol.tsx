import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { dataListIdol } from "../../data/listIdol";

Idol.propTypes = {};

function Idol() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 7,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="home-page__slider-idol">
      <div className="slider__items-idol">
        <Slider {...settings}>
          {dataListIdol.map((item) => (
            <div key={item.id} className="slider__item-idol">
              <img src={item.img} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Idol;
