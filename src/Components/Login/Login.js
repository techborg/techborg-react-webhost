import React,{useState} from 'react';
import './Login.css';
import {useHistory} from 'react-router-dom'
import { useContext } from 'react';
import {FirebaseContext} from '../../store/FirebaseContext'
function Login() {
const [email,setemail]=useState('')
const [password,setpassword]=useState('')
const {firebase}=useContext(FirebaseContext)
const history =useHistory()
const handlelognin=(e)=>{
     e.preventDefault()
     firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
       history.push('/')
     }).catch((error)=>{
       alert(error.messege)
     })
}
  return (
    <div>
      <div className="loginParentDiv">
        
        <form onSubmit={handlelognin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John@example.com"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
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
            value={password}
            onChange={(e)=>setpassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a>Signup</a>
      
      </div>
   
    </div>
    
  );
}

export default Login;
