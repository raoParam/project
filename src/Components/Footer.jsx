import React from 'react';
import './footer.css';
import groupPhoto from '../assets/group_photo.jpg';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">Contact Information</h3>
          <p className="footer-text">132 feet ring road, Samaras Hostel</p>
          <p className="footer-text">Ahmedabad, Gujarat</p>
          <p className="footer-text">+91 8780262406</p>
          <p className="footer-text">
            <a href="mailto:support@company.com" className="footer-link">
              support@company.com
            </a>
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">About the company</h3>
          <p className="footer-text">
            Lorem ipsum dolor sit amet, consectateur adipiscing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-title">Follow us</h3>
          <div className="social-links">
            <a href="#" className="social-link">Facebook</a>
            <a href="#" className="social-link">Twitter</a>
            <a href="#" className="social-link">LinkedIn</a>
            <a href="#" className="social-link">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <div className="image">
            <img width={400} height={300}  src={groupPhoto} alt="Group" />          
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} FlowChat. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;