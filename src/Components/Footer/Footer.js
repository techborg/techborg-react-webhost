import React from 'react';

import './Footer.css';
import {useHistory} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';

function Footer() {
  const history = useHistory()
  return (
    <div className="footerParentDiv">
      <div className="content">
        <div>
          <div className="heading">
            <p>Popular Acticles </p>
          </div>
          <div className="list">
            <ul>
            <li><button className='list1' onClick={()=>history.push('/articles/CPP')}>C++</button></li>
            <li><button className='list1' onClick={()=>history.push('/')}>Web Programming</button></li>
            <li><button className='list1' onClick={()=>history.push('/')}>Smart Device Programming</button></li>
            <li><button className='list1' onClick={()=>history.push('/articles/Java')}>Java</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>About Us</p>
          </div>
          <div className="list">
            <ul>
              <li><button className='list1' onClick={()=>history.push('/aboutus/about')}>About</button></li>
              <li><button className='list1' onClick={()=>history.push('/')}>Community</button></li>
              <li><button className='list1' onClick={()=>history.push('/aboutus/careers')}>Careers</button></li>
              <li><button className='list1' onClick={()=>history.push('/aboutus/contactus')}>Contact Us</button></li>
              <li><button className='list1' onClick={()=>history.push('/opensource')}>Open-source</button></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="heading">
            <p>Techborg</p>
          </div>
          <div className="list">
            <ul>
            <li><button className='list1' onClick={()=>history.push('/help')}>Help</button></li>
            <li><button className='list1' onClick={()=>history.push('/')}>Sitemap</button></li>
            <li><button className='list1' onClick={()=>history.push('/termsofuse')}>Terms of use</button></li>
            <li><button className='list1' onClick={()=>history.push('/privacypolicy')}>Privacy policy</button></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer">
        
        <p onClick={()=>history.push('/')}>TechBorg Digital Labs © 2018-2022</p>
        
        <div>
        <SocialIcon  url="https://www.facebook.com/techborgfb/"/>
        <SocialIcon url="https://www.instagram.com/techborg_/"/>
        <SocialIcon url="https://twitter.com/tech_borg/"/>
        <SocialIcon url="https://www.linkedin.com/company/techborglearning/"/>
        <SocialIcon url="https://www.youtube.com/c/Techborg?sub_confirmation=1"/>
        </div>
        
  
        </div>
      </div>
    
    
  );
}

export default Footer;