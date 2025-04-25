import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
   
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="contact-us section" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 align-self-center">
            <div className="section-heading">
              <h6>Contact Us</h6>
              <h2>Feel free to contact us anytime</h2>
              <p>You can contact us via email at: <bold>ieeeunilagchapter@gmail.com</bold> or connect with individual memebers of the team on linkedinf</p>
              <div className="special-offer">
                <span className="offer">IAS<br /><em>25'</em></span>
                <h6>Project: <em>AgriTradar</em></h6>
                <h4>University of Lagos</h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="contact-us-content">
              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <fieldset>
                      <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Your Name..." 
                        autoComplete="on" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        pattern="[^ @]*@[^ @]*" 
                        placeholder="Your E-mail..." 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <textarea 
                        name="message" 
                        id="message" 
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </fieldset>
                  </div>
                  <div className="col-lg-12">
                    <fieldset>
                      <button type="submit" id="form-submit" className="orange-button">Send Message Now</button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;