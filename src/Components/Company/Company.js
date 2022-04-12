import React from 'react';

import {Button,ButtonGroup} from 'react-bootstrap';
import './Company.css';
import {useHistory} from 'react-router-dom'

function Company() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
        <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={()=>history.push('/aboutus/About')}>About Us</Button>
        <Button variant="secondary" onClick={()=>history.push('/aboutus/Company')}>Company</Button>
        <Button variant="secondary" onClick={()=>history.push('/aboutus/team')}>Team</Button>
        </ButtonGroup>
        

        <h3></h3>
            
            <p>TechBorg</p>
            
			<p></p>

                             
			<h2></h2>
			
			<p></p>
       
       
        </div>
    
    
      
  );
}

export default Company;
