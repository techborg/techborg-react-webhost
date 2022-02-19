import React from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom'

function Header() {
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          {}
           <h1>TECHBORG</h1>
        </div>          
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Innovation
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Robotics</a>
          <a class="dropdown-item" href="#">Drones</a>
          <a class="dropdown-item" href="#">AI</a>
          <a class="dropdown-item" href="#">Blockchain</a>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Hardware</a>
          <a class="dropdown-item" href="#">Software</a>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Computer Science
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Computer Engineering</a>
          <a class="dropdown-item" href="#">Computer Hardware Engineering</a>
          <a class="dropdown-item" href="#">Information Technology</a>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" href="#">Articles</a>
          <a class="dropdown-item" href="#">Blog</a>
          </div>
          </div>                         
         <div className="loginPage">
         <span><button className='list1' onClick={()=>history.push('/login')} >Login</button></span>
         </div>
         <div className="Signup">
         <span><button className='list1' onClick={()=>history.push('/signup')}>Signup</button></span>
        </div>
        <hr />
      </div>
    </div>
    
  );
}

export default Header;
