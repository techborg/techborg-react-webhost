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
				
					<h2>Team</h2>
					
					<p></p>
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
								
								<img class="img-responsive" src="../../../Images/team/shaunsebastian.jpg" alt="Team Member" />
					
								<h3>Shaun Sebastian</h3>
							
								<span class="dig">Founder & CEO</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
						
							<div class="member">
						
								<img class="img-responsive" src="../../../Images/team/2.png" alt="Team Member" />
					
								<h3>Team member</h3>
								
								<span class="dig">CTO</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
						
							<div class="member">
						
								<img class="img-responsive" src="../../../Images/team/2.png" alt="Team Member" />
								
								<h3>Team member</h3>
								
								<span class="dig">COO</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
								
								<img class="img-responsive" src="../../../Images/team/2.png" alt="Team Member" />
						
								<h3>Team member</h3>
								
								<span class="dig">CFO</span>
								
							</div>
						</div>
					</div>
				</div>
			</div>
			

			<div class="mteam" id="mteam">
				<div class="container">
					<div class="default-heading">
					
						<h2>Management Team</h2>
					</div>
					<div class="row">
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
								
								<img class="img-responsive" src="../../../Images/team/akhilgeorge.jpg" alt="Team Member" />
								
								<h3>Akhil George</h3>
							
								<span class="dig">Robotics</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
							
							<div class="member">
					
								<img class="img-responsive" src="../../../Images/team/2.png" alt="Team Member" />
					
								<h3>Team member</h3>
							
								<span class="dig">Drones</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
					
							<div class="member">
								
								<img class="img-responsive" src="../../../Images/team/2.png" alt="Team Member" />
							
								<h3>Team member</h3>
						
								<span class="dig">AI</span>
								
							</div>
						</div>
						<div class="col-md-3 col-sm-3">
					
							<div class="member">
								
								<img class="img-responsive" src="../../../Images/team/2.png" alt="Team Member" />
							
								<h3>Team member</h3>
								
								<span class="dig">Computer Science</span>
								
							</div>
						</div>
					</div>
				</div>
			</div>

        </div>
    
    
      
  );
}

export default Team;
