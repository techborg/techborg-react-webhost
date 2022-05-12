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
          {/* <div class="dropdown">
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
          </div>           */}
         
          {/*<div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All Course
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={()=>history.push('/cs/ce')}>Computer Engineering</a>
          <a class="dropdown-item" onClick={()=>history.push('/cs/che')}>Computer Hardware Engineering</a>
          <a class="dropdown-item" onClick={()=>history.push('/cs/it')}>Information Technology</a>
          </div>
          </div>*/}
          
          
{/* 		
			<div class="dropdown dropdown-large">
				<a  class="dropdown-toggle" data-toggle="dropdown">All Course </a>
				
				<ul class="dropdown-menu dropdown-menu-large row">
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">AI &#38; Machine Learning</li>
							<li><a href="#">Machine Learning Course</a></li>
							<li><a href="#">Deep Learning Course (with Keras &#38; TensorFlow)</a></li>
							
							<li class="divider"></li>
							<li class="dropdown-header">Cyber Security</li>
							<li><a href="#">Example</a></li>
							<li><a href="#">Aligninment options</a></li>
							<li><a href="#">Headers</a></li>
							<li><a href="#">Disabled menu items</a></li>
						</ul>
					</li>
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">Cloud Computing</li>
							<li><a href="#">Basic example</a></li>
							<li><a href="#">Button toolbar</a></li>
							<li><a href="#">Sizing</a></li>
							<li><a href="#">Nesting</a></li>
							<li><a href="#">Vertical variation</a></li>
							<li class="divider"></li>
							<li class="dropdown-header">DevOps</li>
							<li><a href="#">Single button dropdowns</a></li>
						</ul>
					</li>
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">Software Development</li>
							<li><a href="#">Basic example</a></li>
							<li><a href="#">Sizing</a></li>
							<li><a href="#">Checkboxes and radio addons</a></li>
							<li class="divider"></li>
							<li class="dropdown-header">Digital Marketing</li>
							<li><a href="#">Tabs</a></li>
							<li><a href="#">Pills</a></li>
							<li><a href="#">Justified</a></li>
						</ul>
					</li>
					<li class="col-sm-3">
						<ul>
							<li class="dropdown-header">Big Data</li>
							<li><a href="#">Default navbar</a></li>
							<li><a href="#">Buttons</a></li>
							<li><a href="#">Text</a></li>
							<li><a href="#">Non-nav links</a></li>
							<li><a href="#">Component alignment</a></li>
							<li><a href="#">Fixed to top</a></li>
							<li><a href="#">Fixed to bottom</a></li>
							<li><a href="#">Static top</a></li>
							<li><a href="#">Inverted navbar</a></li>
						</ul>
					</li>
				</ul>
				
			</div>
		


          <div class="dropdown">
          <button class="btn btn-white dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a class="dropdown-item" onClick={()=>history.push('/menu/articles')}>Articles</a>
          <a class="dropdown-item" onClick={()=>history.push('/menu/blog')}>Blog</a>
          </div>
          </div>     */}
                        
         <div className="loginPage">
                  


         <span>{user ? ` Welcome ${user.displayName}` : <button className='list1' onClick={()=>history.push('/login')}>Login</button> }  </span>



         {/* <span> <button className='list1' onClick={()=>history.push('/login')}> {user ? ` Welcome ${user.displayName}` : <button>Login</button> } </button> </span>  */}
        
         </div>
          <button className='list1'>{ user&& <span onClick={()=>{
           firebase.auth().signOut()
           history.push('/login')
         }}>Logout</span> }</button> 
         <div className="Signup">
         <span><button className='list1' onClick={()=>history.push('/signup')}> {user ?'':'Signup'}</button></span>
        </div>
        
       

        <hr />
      </div>
    </div>
    
  );
}

export default Header;
