import React from 'react';
import { useState,useContext} from 'react';
import { FirebaseContext } from '../../store/FirebaseContext';
import './Signup.css';
import { useHistory } from 'react-router-dom';

export default function Signup() {
  const history=useHistory()
  const [username,setusername]=useState('');
  const [email,setemail]=useState('');
  const [phone,setphone]=useState('');
  const [password,setpassword]=useState('');
   const {firebase}=useContext(FirebaseContext)
  const Handlesubmit=(e)=>{
    e.preventDefault()
    console.log(username); 
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
        }).then(()=>{
             history.push('/login')
        })
      })
    })
  }
  return (
    <div>
      <div className="signupParentDiv">
        
        <form onSubmit={Handlesubmit} >
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(e)=>setusername(e.target.value)}
            id="fname"
            name="name"
            defaultValue="Johnjose"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fmail"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            name="email"
            defaultValue="John@exapmle.com"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            value={phone}
            onChange={(e)=>setphone(e.target.value)}
            name="phone"
            defaultValue="9876543210"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lpass"
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
            name="password"
            defaultValue="Abc@123"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>history.push('/login')}>Login</a>
      </div>
    </div>
  );
}
