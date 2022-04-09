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
           <h1 onClick={()=>history.push('/')}>TECHBORG</h1>
        </div>          
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Innovation
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={()=>history.push('/innovation/robotics')}>Robotics</a>
          <a class="dropdown-item" onClick={()=>history.push('/innovation/drones')}>Drones</a>
          <a class="dropdown-item" onClick={()=>history.push('/innovation/ai')}>AI</a>
          <a class="dropdown-item" onClick={()=>history.push('/innovation/blockchain')}>Blockchain</a>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Projects
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item"  onClick={()=>history.push('/projects/hardware')}>Hardware</a>
          <a class="dropdown-item"  onClick={()=>history.push('/projects/software')}>Software</a>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Computer Science
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={()=>history.push('/cs/ce')}>Computer Engineering</a>
          <a class="dropdown-item" onClick={()=>history.push('/cs/che')}>Computer Hardware Engineering</a>
          <a class="dropdown-item" onClick={()=>history.push('/cs/it')}>Information Technology</a>
          </div>
          </div>
          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={()=>history.push('/menu/articles')}>Articles</a>
          <a class="dropdown-item" onClick={()=>history.push('/menu/blog')}>Blog</a>
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
