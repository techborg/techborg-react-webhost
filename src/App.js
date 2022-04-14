import React,{useContext } from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import { Authcontext, FirebaseContext } from './store/FirebaseContext';

/**
 * ?  =====Import Components=====
 */
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Robotics from './Pages/innovation/robotics'
import Drones from './Pages/innovation/drones'
import AI from './Pages/innovation/AI'
import Blockchain from './Pages/innovation/blockchain'
import Software from './Pages/projects/software'
import Hardware from './Pages/projects/hardware'
import Articles from './Pages/menu/articles'
import Blog from './Pages/menu/blog'
import CE from './Pages/cs/ce'
import CHE from './Pages/cs/che'
import IT from './Pages/cs/it'
import About from './Pages/aboutus/about'
import Careers from './Pages/aboutus/careers';
import Contact from './Pages/aboutus/contactus';
import Help from './Pages/help';
import Legalinformation from './Pages/legalinformation';
import Privacypolicy from './Pages/privacypolicy';
import Company from './Pages/aboutus/company';
import Team from './Pages/aboutus/team';

import { useEffect } from 'react';




function App() { 
const {firebase}=useContext(FirebaseContext)
const {setuser}=useContext(Authcontext)
useEffect(()=>{
  firebase.auth().onAuthStateChanged((user=>{
    setuser(user)
  }))
}) 
  return (
    <div>
      <Router>

        <Route exact path='/'>
         <Home />
         </Route>
         <Route  path='/Signup'>
         <Signup/>         
         </Route>
         <Route  path='/login'>
          <Login/>
         </Route>
         <Route  path='/innovation/robotics'>
         <Robotics />
         </Route>
         <Route  path='/innovation/drones'>
         <Drones />
         </Route>
         <Route  path='/innovation/AI'>
         <AI />
         </Route>
         <Route  path='/innovation/blockchain'>
         <Blockchain />
         </Route>       
         <Route path='/cs/ce'>
          <CE />
         </Route>
         <Route path='/cs/che'>
          <CHE />
         </Route>
         <Route path='/cs/it'>
          <IT />
         </Route>
         <Route path='/menu/articles'>
          <Articles />
         </Route> 
         <Route path='/menu/blog'>
          <Blog />
         </Route>
         <Route path='/projects/hardware'>
          <Hardware />
         </Route>
         <Route path='/projects/software'>
          <Software />
         </Route> 
         <Route path='/aboutus/about'>
          <About />
         </Route> 
         <Route path='/aboutus/careers'>
          <Careers />
         </Route> 
         <Route path='/aboutus/contactus'>
          <Contact />
         </Route> 
         <Route path='/help'>
          <Help />
         </Route>
         <Route path='/legalinformation'>
          <Legalinformation />
         </Route> 
         <Route path='/privacypolicy'>
          <Privacypolicy />
         </Route> 
         <Route path='/aboutus/company'>
          <Company />
         </Route> 
         <Route path='/aboutus/team'>
          <Team />
         </Route> 
         


           
      </Router>
      
    </div>
  );
}

export default App;
