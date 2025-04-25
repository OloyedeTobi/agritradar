import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/SignIn';

const Header = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header-area header-sticky ${sticky ? 'background-header' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
        
              <a href="#top" className="logo">
                <h1>AgriTradar</h1>
              </a>
              
              
              <div className="search-input">
                <form id="search" action="#">
                  <input type="text" placeholder="Type Something" id="searchText" name="searchKeyword" />
                  <i className="fa fa-search"></i>
                </form>
              </div>
              
             
              <ul className={`nav ${mobileMenuOpen ? 'active' : ''}`}>
                <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                <li className="scroll-to-section"><a href="#services">Services</a></li>
                <li className="scroll-to-section"><a href="#courses">Resources</a></li>
                <li className="scroll-to-section"><a href="#team">Team</a></li>
                <li className="scroll-to-section"><a href="#contact">Contact</a></li>
                <li className="scroll-to-section"><Link to="/login">Login</Link></li>
                <li className="scroll-to-section"><Link to="/signup">Sign Up!</Link></li>
              </ul>
              
              <a className="menu-trigger" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;