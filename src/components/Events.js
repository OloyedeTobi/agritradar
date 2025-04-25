import React from 'react';
import event1 from '../assets/images/event-01.jpg';
import event2 from '../assets/images/event-02.jpg';
import event3 from '../assets/images/event-03.jpg';

const Events = () => {
  const events = [
    {
      id: 1, 
      image: event1, 
      category: 'Solar', 
      seller: 'Wale Davis', 
      date: '16 Feb 2036', 
      duration: '22 Hours', 
      price: '120 Naira'
    },
    {
      id: 2, 
      image: event2, 
      category: 'Solar', 
      seller: 'Daniel Davids', 
      date: '24 Feb 2036', 
      duration: '30 Hours', 
      price: '$320'
    },
    {
      id: 3, 
      image: event3, 
      category: 'Solar', 
      seller: 'ola', 
      date: '12 Mar 2036', 
      duration: '48 Hours', 
      price: '$440'
    }
  ];

  return (
    <div className="section events" id="events">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h6>Schedule</h6>
              <h2>Upcoming Events</h2>
            </div>
          </div>
          {events.map(event => (
            <div className="col-lg-12 col-md-6" key={event.id}>
              <div className="item">
                <div className="row">
                  <div className="col-lg-3">
                    <div className="image">
                      <img src={event.image} alt={event.title} />
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <ul>
                      <li>
                        <span className="category">{event.category}</span>
                        <h4>{event.seller}</h4>
                      </li>
                      <li>
                        <span>Date:</span>
                        <h6>{event.date}</h6>
                      </li>
                      <li>
                        <span>Duration:</span>
                        <h6>{event.duration}</h6>
                      </li>

                      <li>
                        <span>Price:</span>
                        <h6>{event.price}</h6>
                      </li>
                    </ul>
                    <a href="#"><i className="fa fa-angle-right"></i></a>
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

export default Events;


