import React from 'react';

import './Footer2.css';
import {useHistory} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';


function Footer2() {
  const history = useHistory()
  return (
    
    <div className="footerParentDiv">
      <div className="content">
      
          
      
      <div className="footer">
        
        <p onClick={()=>history.push('/')}>TechBorg Digital Labs © 2018-2022</p>
        <div>
        <SocialIcon  url="https://www.facebook.com/techborgfb/"/>
        <SocialIcon url="https://www.instagram.com/techborg_/"/>
        <SocialIcon url="https://twitter.com/tech_borg/"/>
        <SocialIcon url="https://www.linkedin.com/company/techborglearning/"/>
        <SocialIcon url="https://www.youtube.com/c/TechBorg"/>
        <SocialIcon url="https://play.google.com/store/apps/details?id=com.techborg.techborgtutorial"/>
        <SocialIcon url="https://github.com/techborg"/>
        </div>
  
        </div>
      </div>
    </div>
    
  );
}

export default Footer2;
