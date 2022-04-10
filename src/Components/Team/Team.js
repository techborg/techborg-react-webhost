import React from 'react';

import {Button,ButtonGroup} from 'react-bootstrap';
import './Team.css';
import {useHistory} from 'react-router-dom'

function Team() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
        <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={()=>history.push('/aboutus/about')}>About Us</Button>
        <Button variant="secondary" onClick={()=>history.push('/aboutus/company')}>Company</Button>
        <Button variant="secondary" onClick={()=>history.push('/aboutus/team')}>Team</Button>
        </ButtonGroup>
        
       
        </div>
    
    
      
  );
}

export default Team;
