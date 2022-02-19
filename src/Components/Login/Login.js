import React from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory()
  return (
    <div>
      <div className="loginParentDiv">
        
        <form>
          <label htmlFor="fname">Username/Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John@example.com"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Abc@123"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>history.push('/signup')}>Signup</a>
      
      </div>
   
    </div>
    
  );
}

export default Login;
