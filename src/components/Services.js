import React from 'react';
import serviceImage1 from '../assets/images/services11.png';
import serviceImage2 from '../assets/images/services22.png';
import serviceImage3 from '../assets/images/services33.png';

const serviceData = [
  {
    image: serviceImage1,
    alt: 'Buy Energy',
    title: 'Buy Energy',
    description: 'Whenever you need energy to power your farm, you just remember our app.',
  },
  {
    image: serviceImage2,
    alt: 'Sell Energy',
    title: 'Sell Energy',
    description: 'You can list excess energy generated on your farm for sale on our app.',
  },
  {
    image: serviceImage3,
    alt: 'Understand Energy Usage',
    title: 'Understand Energy Usage',
    description: 'Understand your energy usage and how to optimize it for your farm.',
  },
];

const Services = () => {
  return (
    <div className="services section" id="services">
      <div className="container">
        <div className="row">
          {serviceData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-item">
                <div className="icon">
                  <img src={service.image} alt={service.alt} />
                </div>
                <div className="main-content">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                  <div className="main-button">
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;