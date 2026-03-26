import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null);

  const handleDemoClick = () => {
    setMobileMenuOpen(false);
    navigate('/contact');
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Close on Escape key
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Close on click outside
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !e.target.closest('.mobile-menu-btn')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
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
          aria-expanded={mobileMenuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
      <div
        ref={menuRef}
        className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!mobileMenuOpen}
      >
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
