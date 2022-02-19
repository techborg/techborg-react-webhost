import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'


/**
 * ?  =====Import Components=====
 */
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Robotics from './Pages/robotics'
import Drones from './Pages/drones'
import AI from './Pages/AI';
import Blockchain from './Pages/blockchain'
function App() { 
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
         <Route  path='/robotics'>
         <Robotics />
         </Route>
         <Route  path='/drones'>
         <Drones />
         </Route>
         <Route  path='/AI'>
         <AI />
         </Route>
         <Route  path='/blockchain'>
         <Blockchain />
         </Route>         
           
      </Router>
      
    </div>
  );
}

export default App;
