import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonialAuthor from '../assets/images/testimonial-author1.png';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonials = [
    {
        id: 1,
        text: "This platform has revolutionized how I sell my yam! Before, I spent days traveling to the market, often at the mercy of middlemen. Now, buyers come to me online. It's saved me time and increased my profits significantly.",
        image: testimonialAuthor, 
        category: "Fish Farmer",
        name: "Olumide Adebayo",
        city: "Ikorodu, Lagos State"
    },
    {
        id: 2,
        text: "Access to reliable market information has been a game-changer. I used to plant based on guesswork, leading to losses when prices were low. Now, I can see demand trends and plan my planting accordingly. My rice farm is more sustainable because I waste less.",
        image: testimonialAuthor, 
        category: "Fish Farmer",
        name: "Fatima Hassan",
        city: "Ikorodu, Lagos State"
    },
    {
        id: 3,
        text: "I was skeptical about selling online, but the support I received was incredible. From setting up my profile to handling transactions, the team guided me every step of the way. My cassava farm is now reaching customers I never thought possible.",
        image: testimonialAuthor, 
        category: "Farmer",
        name: "Olamide Tinubu",
        city: "Ikorodu, Lagos State"
    }
];

  return (
    <div className="section testimonials">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <Slider {...settings}>
              {testimonials.map(testimonial => (
                <div className="item" key={testimonial.id}>
                  <p>"{testimonial.text}"</p>
                  <div className="author">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <span className="category">{testimonial.category}</span>
                    <h4>{testimonial.name}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="section-heading">
              <h6>TESTIMONIALS</h6>
              <h2>What they say about us?</h2>
              <p>We are making strides to make Agriculture in Nigeria sustainable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;