import React, { useState, useEffect } from 'react';
import courseImage1 from '../assets/images/course-image1.jpg';
import courseImage2 from '../assets/images/course-image2.jpeg';
import courseImage3 from '../assets/images/course-image4.jpeg';
import courseImage4 from '../assets/images/course-image5.jpg';
import courseImage5 from '../assets/images/course-image6.jpg';
import courseImage6 from '../assets/images/courseimage3.jpeg';
import Isotope from 'isotope-layout';

const Courses = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState('*');

  useEffect(() => {
    setTimeout(() => {
      setIsotope(
        new Isotope('.event_box', {
          itemSelector: '.event_outer',
          layoutMode: 'fitRows',
        })
      );
    }, 500);
  }, []);

  useEffect(() => {
    if (isotope) {
      filterKey === '*'
        ? isotope.arrange({ filter: '*' })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  const handleFilterKeyChange = key => () => setFilterKey(key);

  const courses = [
    { 
        id: 1, 
        image: courseImage1, 
        category: 'Energy', 
        author: 'SEAI Schools', 
        title: 'The Story of Energy', 
        classes: 'energy', 
        source: 'https://youtu.be/uPCiHhMvgo4?si=EULpznrzUQD3sCSq' 
    },
    { 
        id: 2, 
        image: courseImage2, 
        category: 'Renewable energy',
        author: 'The Independent', 
        title: 'What is renewable energy?', 
        classes: 'renewable', 
        source: 'https://youtu.be/VfowJHJz6-s?si=6qGg7VXp4pAJ-sHK' 
    },
    { 
        id: 3, 
        image: courseImage3, 
        category: 'Sustainable farming',
        author: 'SARE Outreach', 
        title: 'What is Sustainable Agriculture?', 
        classes: 'farming',
        source: 'https://youtu.be/iloAQmroRK0?si=RdhuIrCmm-wyuPj_s'
    },
    { 
        id: 4, 
        image: courseImage4, 
        category: 'Renewable energy', 
        author: 'BBC News',
        title: 'Can the world rely entirely on renewable energy?',
        classes: 'renewable', 
        source: 'https://youtu.be/gLvkWpnzba8?si=fSz6PwFPf1phv6wN'
    },
    { 
        id: 5, 
        image: courseImage5, 
        category: 'Sustainable farming',
        author: 'Valuetainment',
        title: 'How Vertical Farming Could Solve Food Shortages',
        classes: 'farming',
        source: 'https://youtu.be/aMmsqBiIu8U?si=eO2EizwpDRbf27uO'
    },
   { 
        id: 6, 
        image: courseImage6, 
        category: 'Energy',
        author: 'Cambridge University',
        title: 'The Future of Energy',
        classes: 'energy',
        source: 'https://youtu.be/Gz_L6KuqvFI?si=rCuD28M3w6uYosL6'
    }
];

  return (
    <section className="section courses" id="courses">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="section-heading">
              <h6>Resources</h6>
              <h2>Resources</h2>
            </div>
          </div>
        </div>
        <ul className="event_filter">
          <li>
            <a className={filterKey === '*' ? 'is_active' : ''} href={courses.source} onClick={handleFilterKeyChange('*')}>Show All</a>
          </li>
          <li>
            <a className={filterKey === 'energy' ? 'is_active' : ''} href={courses.source} onClick={handleFilterKeyChange('energy')}>Energy</a>
          </li>
          <li>
            <a className={filterKey === 'renewable' ? 'is_active' : ''} href={courses.source} onClick={handleFilterKeyChange('renewable')}>Renewable energy</a>
          </li>
          <li>
            <a className={filterKey === 'farming' ? 'is_active' : ''} href={courses.source} onClick={handleFilterKeyChange('farming')}>sustainable farming</a>
          </li>
        </ul>
        <div className="row event_box">
          {courses.map(course => (
            <div key={course.id} className={`col-lg-4 col-md-6 align-self-center mb-30 event_outer ${course.classes}`}>
              <div className="events_item">
                <div className="thumb">
                  <a href={course.source}><img src={course.image} alt={course.title} /></a>
                  <span className="category">{course.category}</span>
                  <a href={course.source} ><span className="price"><h6>Go</h6></span> </a>
                </div>
                <div className="down-content">
                  <span className="author">{course.author}</span>
                  <h4>{course.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;