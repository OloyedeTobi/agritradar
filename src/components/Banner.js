import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow next-arrow`}
      style={{ ...style }}
      onClick={onClick}
    >
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'linear',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="main-banner" id="top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Slider {...settings} className="banner-slider">
              <div className="item item-1">
                <div className="header-text">
                  <span className="category">Energy Trading</span>
                  <h2>Buy and Sell energy within your community</h2>
                  <p>Sell excess energy generated on your farm. Buy cheap energy to support your farming operations</p>
                  <div className="buttons">
                    <div className="main-button">
                      <a href="#">Demo</a>
                    </div>
                    <div className="icon-button">
                      <a href="#"><i className="fa fa-play"></i> What's AgriTradar?</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item-2">
                <div className="header-text">
                  <span className="category">Sustainable farming</span>
                  <h2>Adopt Sustainable farming practices </h2>
                  <p>Adopting sustainable practices help you safegaurd the environment, your resources and in the long run, prevent diminishing available natural resources</p>
                  <div className="buttons">
                    <div className="main-button">
                      <a href="#">Demo</a>
                    </div>
                    <div className="icon-button">
                      <a href="#"><i className="fa fa-play"></i> What's Sustainable farming?</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item item-3">
                <div className="header-text">
                  <span className="category">Renewable Energy</span>
                  <h2> Utilize renewable energy source to power your farm</h2>
                  <p> Use solar energy to power your farming operations at a much cheaper rate, and as a way to augment already existing energy source(s)</p>
                  <div className="buttons">
                    <div className="main-button">
                      <a href="#">Demo</a>
                    </div>
                    <div className="icon-button">
                      <a href="#"><i className="fa fa-play"></i> What's Renewable energy?</a>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;