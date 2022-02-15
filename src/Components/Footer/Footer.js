import React from 'react';

import './Footer.css';

function Footer() {
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Popular Acticles </p>
          </div>
          <div className="list">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>About Us</p>
          </div>
          <div className="list">
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>People</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Techborg</p>
          </div>
          <div className="list">
            <ul>
              <li>Help</li>
              <li>Sitemap</li>
              <li>Legal & Privacy information</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer">
        
        <p>TechBorg © 2018-2022</p>
        <p> </p>
  
        </div>
      </div>
    
    
  );
}

export default Footer;
