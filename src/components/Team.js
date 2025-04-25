import React from 'react';
import member1 from '../assets/images/salim.jpg';
import member2 from '../assets/images/shade1.jpg';
import member3 from '../assets/images/Sarah.jpg';
import member4 from '../assets/images/joshua.jpg';
import member5 from '../assets/images/grace.jpeg';

const Team = () => {
  const members = [
    { id: 1, image: member1, category: 'IAS, University of Lagos', name: 'OYINLOLA, Salim Olanrewaju' },
    { id: 2, image: member2, category: 'IAS, University of Lagos', name: 'OLOYEDE, Oluwatobi Folashade' },
    { id: 3, image: member3, category: 'IAS, University of Lagos', name: 'UNOKERIEGHAN, Sarah Urowoli ' },
    { id: 4, image: member4, category: 'IAS, University of Lagos', name: 'AJAYI, Joshua' },
    { id: 5, image: member5, category: 'IAS, University of Lagos', name: 'ETIM, Grace Blessing' }
  ];

  return (
    <div className="team section" id="team">
      <div className="container">
        <div className="row">
          {members.map(member => (
            <div className="col-lg-4 col-md-6 margin-bottom" key={member.id}>
              <div className="team-member">
                <div className="main-content">
                  <img src={member.image} alt={member.name} />
                  <span className="category">{member.category}</span>
                  <h4>{member.name}</h4>
                  <ul className="social-icons">
                    <li><a href="#"><i className="fab fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;