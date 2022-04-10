import React from 'react';

import {Button,ButtonGroup} from 'react-bootstrap';
import './About.css';
import {useHistory} from 'react-router-dom'

function IT() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
        <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">About Us</Button>
        <Button variant="secondary">Company</Button>
        <Button variant="secondary">Team</Button>
        </ButtonGroup>
        <h3></h3>
            
            <p>TechBorg is a E-learning platform that focused on computer related programming articles and troubleshooting</p>
            
			<p>To stay connected with us please like and follow us on&nbsp;<a href="https://www.facebook.com/techborgfb/" target="_blank" rel="nofollow noopener">Facebook</a>,&nbsp;<a href="https://www.youtube.com/c/TechBorg" target="_blank" rel="nofollow noopener">YouTube</a>&nbsp;</p>

                             
			<h2></h2>
			
			<p></p>
       
        </div>
    
    
      
  );
}

export default IT;
