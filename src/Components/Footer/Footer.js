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
            <li><button className='list1'>C++</button></li>
            <li><button className='list1'>Web Programming</button></li>
            <li><button className='list1'>Smart Device Programming</button></li>
            <li><button className='list1'>Java</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>About Us</p>
          </div>
          <div className="list">
            <ul>
              <li><button className='list1'>About</button></li>
              <li><button className='list1'>Community</button></li>
              <li><button className='list1'>Careers</button></li>
              <li><button className='list1'>Contact Us</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Techborg</p>
          </div>
          <div className="list">
            <ul>
            <li><button className='list1'>Help</button></li>
            <li><button className='list1'>Sitemap</button></li>
            <li><button className='list1'>Legal information</button></li>
            <li><button className='list1'>Privacy policy</button></li>
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
