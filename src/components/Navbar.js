import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleDemoClick = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-logo">
          <img src="/visualcontent/ARCHVlogo.svg" alt="Archv" className="nav-logo-img" />
          Archv
        </Link>
        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/security">Security</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
          <NavLink to="/investors">Investors</NavLink>
        </div>
        <button className="nav-cta" onClick={handleDemoClick}>
          Request Demo
        </button>
        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/" onClick={closeMobileMenu}>Home</NavLink>
        <NavLink to="/solutions" onClick={closeMobileMenu}>Solutions</NavLink>
        <NavLink to="/security" onClick={closeMobileMenu}>Security</NavLink>
        <NavLink to="/pricing" onClick={closeMobileMenu}>Pricing</NavLink>
        <NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink>
        <NavLink to="/investors" onClick={closeMobileMenu}>Investors</NavLink>
        <NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink>
      </div>
    </>
  );
}

export default Navbar;
