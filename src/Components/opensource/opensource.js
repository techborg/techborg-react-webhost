import React from 'react';

import {Button,ButtonGroup} from 'react-bootstrap';
import './opensource.css';
import {useHistory} from 'react-router-dom'

function opens() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
        <h1>Open-Source</h1>
        
        <p>Open-Source projects are supported by our community.</p>
        <br></br>
        <p>Projects are freely available in our public repository.</p>
        <br></br>
        <p></p>
       
        </div>
    
    
      
  );
}

export default opens;
