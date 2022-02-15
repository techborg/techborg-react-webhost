import React from 'react';
import { useState } from 'react';
import Logo from '../../olx-logo.png';
import './Signup.css';
import axios from 'axios';
 const baseurl=''
export default function Signup() {
  const[signup,setsignup]=useState({
         'full_name':'' ,            
         'email':'' ,            
         'phone':''  ,           
         'password':''              
    }
  );
  const Handlechange=(e)=>{
        e.preventDefault()
        setsignup({
          ...signup,
          [e.target.name]:e.target.value
        });
        e.preventDefault()
  }
  console.log(signup);
  const submit=(e)=>{
    e.preventDefault()
    const signupData=new FormData();
    signupData.append('full_name',signup.full_name)
    signupData.append('email',signup.email)
    signupData.append('phone',signup.phone)
    signupData.append('password',signup.password)

    try{
      axios.get(baseurl,signupData).then((response)=>{
        console.log(response.data);
       })
    }catch(error){
          console.log(error );
    }
   
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form  >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            onChange={ Handlechange}
            name="full_name"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            onChange={ Handlechange}
            name="email"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            onChange={ Handlechange}
            name="phone"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            onChange={ Handlechange}
            name="password" 
          />
          <br />
          <br />
          <button   onClick={submit}>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
