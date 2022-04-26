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
        
        <div class="banner">
				<div class="container">
				
				<h2>Management Team</h2>
					
					<p></p>
				</div>
			</div>
			<div class="eteam" id="eteam">
				<div class="container">
					<div class="default-heading">
					
						<h2>Board Of Directors</h2>
					</div>
					<div class="row">
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
								
								
					
								<h3>Team member</h3>
							
								<span class="dig"></span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
						
							<div class="member">
						
								
					
								<h3>Team member</h3>
								
								<span class="dig"></span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
						
							<div class="member">
						
								
								
								<h3>Team member</h3>
								
								<span class="dig"></span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
								
								
						
								<h3>Team member</h3>
								
								<span class="dig"></span>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<div class="eteam" id="eteam">
				<div class="container">
					<div class="default-heading">
					
						<h2>Executing Team</h2>
					</div>
					<div class="row">
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
								
								
					
								<h3>Shaun Sebastian</h3>
							
								<span class="dig">Founder &#38; CEO</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
						
							<div class="member">
						
								
					
								<h3>Team member</h3>
								
								<span class="dig">CTO</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
						
							<div class="member">
						
								
								
								<h3>Team member</h3>
								
								<span class="dig">COO</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
								
								
						
								<h3>Team member</h3>
								
								<span class="dig">CFO</span>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			

			
        </div>
    
    
      
  );
}

export default Team;
