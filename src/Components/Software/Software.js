import React from 'react';


import './Software.css';
import {useHistory} from 'react-router-dom'


function Software() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
      <div className="recommendations">
        <div className="heading">
          <span>Software Projects</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/event/" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">PocketBook</p>
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
              <img src="../../../Images/event/" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Vomail</p>
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
              <img src="../../../Images/event/" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name"></p>
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

export default Software;
