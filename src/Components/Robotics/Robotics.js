import React from 'react';


import './Robotics.css';
import {useHistory} from 'react-router-dom'

function Robotics() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
      <div className="recommendations">
        <div className="heading">
          <span>Robotics</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/Inn/rb/" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Micro-Robotics</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
          <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/Inn/rb/" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Automation</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/Inn/rb/" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Bio-Cybernetics</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        
            
            </div>
            
        </div>
        </div>
      
  );
}

export default Robotics;
