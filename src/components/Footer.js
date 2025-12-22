import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">Archv</div>
          <p className="footer-tagline">
            The AI operating system for regulated industries. 
            Compliant by design. Powerful by default.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Product</h4>
            <Link to="/solutions">Solutions</Link>
            <Link to="/security">Security</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
          <div className="footer-column">
            <h4>Company</h4>
            <Link to="/investors">Investors</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/faq">FAQ</Link>
          </div>
          <div className="footer-column">
            <h4>Connect</h4>
            <a href="https://www.linkedin.com/company/archvai/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:hello@archvai.com">Email</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span className="footer-copyright">© 2025 Archv AI. All rights reserved.</span>
        <div className="footer-legal">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
