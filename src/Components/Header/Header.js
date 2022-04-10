import React,{useContext} from 'react';
import './Header.css';
import {useHistory} from 'react-router-dom'
import { Authcontext, FirebaseContext } from '../../store/FirebaseContext';

function Header() {
  const {user}=useContext(Authcontext)
  const {firebase}=useContext(FirebaseContext)
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
          <a class="dropdown-item" onClick={()=>history.push('/innovation/Robotics')}>Robotics</a>
          <a class="dropdown-item" onClick={()=>history.push('/innovation/Drones')}>Drones</a>
          <a class="dropdown-item" onClick={()=>history.push('/innovation/AI')}>AI</a>
          <a class="dropdown-item" onClick={()=>history.push('/innovation/Blockchain')}>Blockchain</a>
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
                  


         <span>{user ? ` Welcome ${user.displayName}` : <button className='list1' onClick={()=>history.push('/login')}>Login</button> }  </span>



         {/* <span> <button className='list1' onClick={()=>history.push('/login')}> {user ? ` Welcome ${user.displayName}` : <button>Login</button> } </button> </span>  */}
        
         </div>
          <button className='list1'>{ user&& <span onClick={()=>{
           firebase.auth().signOut()
           history.push('/login')
         }}>Logout</span> }</button> 
         <div className="Signup">
        : <span><button className='list1' onClick={()=>history.push('/signup')}> {user ?'':'Signup'}</button></span>
        </div>
        
       

        <hr />
      </div>
    </div>
    
  );
}

export default Header;
