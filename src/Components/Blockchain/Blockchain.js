import React from 'react';


import './Blockchain.css';
import {useHistory} from 'react-router-dom'

function Blockchain() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
      <div className="recommendations">
        <div className="heading">
          <span>Blockchain</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/Inn/bc/NFT_Icon.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">NFTs</p>
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
              <p className="name"></p>
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

export default Blockchain;
