import React from 'react';

import './Footer2.css';
import {useHistory} from 'react-router-dom'



function Footer2() {
  const history = useHistory()
  return (
    
    <div className="footerParentDiv">
      <div className="content">
      
          
      
      <div className="footer">
        
        <p onClick={()=>history.push('/')}>TechBorg © 2018-2022</p>
        
  
        </div>
      </div>
    </div>
    
  );
}

export default Footer2;
