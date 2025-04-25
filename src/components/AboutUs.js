import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const AboutUs = () => {
  return (
    <div className="section about-us">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-1">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>How does the energy trading app work?</Accordion.Header>
                <Accordion.Body>
                Our app <strong>connects</strong> energy producers (like farms with solar panels) and energy consumers. Producers can list their excess energy for sale, <code>specifying the price and quantity.</code> Consumers can browse available energy listings and purchase energy directly through the app. All transactions are securely processed, and we provide tools to help you track your energy usage and trading history.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What types of energy can be traded on the platform?</Accordion.Header>
                <Accordion.Body>
                Currently, our platform supports the trading of <strong>electricity generated from renewable sources.</strong>, This includes solar, wind, and biomass energy. We are working to expand our support to include other energy types in the future.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Is it safe to buy and sell energy through the app?</Accordion.Header>
                <Accordion.Body>
                Yes, security is our top priority. We use industry-standard encryption to protect your data and payment information. All users are verified to ensure secure transactions. We also provide tools to monitor transactions and resolve any disputes that may arise.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>What are the benefits of using this app compared to traditional energy markets?</Accordion.Header>
                <Accordion.Body>
                Our app offers several advantages:  <strong>Accessibility:</strong> It makes energy trading accessible to smaller producers and consumers who might not have access to traditional markets. <strong>Transparency:</strong> It provides transparent pricing and transaction information.  <strong>Efficiency:</strong> It streamlines the buying and selling process, reducing transaction costs and time.  <strong>Sustainability:</strong> It promotes the use of renewable energy by connecting producers and consumers directly.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="section-heading">
              <h6>About Us</h6>
              <h2>Just a group of students making an impact</h2>
              <p>We use technology to simplify how food, water, and energy systems are managed. From smallholder farms to large-scale networks, our platform empowers sustainable choices through data, transparency, and community.</p>
              <div className="main-button">
                <a href="#">Discover More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;