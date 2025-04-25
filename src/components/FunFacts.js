import React, { useEffect } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const FunFacts = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    { title: 'Happy Farmers', count: 3 },
    { title: 'Complete Trades', count: 6 },
    { title: 'Cost saved', count: 50 },
    { title: 'Months in Operation', count: 1, isLast: true }
  ];

  return (
    <div className="section fun-facts" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="wrapper">
              <div className="row">
                {stats.map((stat, index) => (
                  <div className="col-lg-3 col-md-6" key={index}>
                    <div className={`counter ${stat.isLast ? 'end' : ''}`}>
                      <h2>
                        {inView ? (
                          <CountUp end={stat.count} duration={2} />
                        ) : (
                          '0'
                        )}
                      </h2>
                      <p className="count-text">{stat.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;