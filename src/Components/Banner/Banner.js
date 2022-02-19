import React from 'react';

import './Banner.css';

function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span></span>
             
          </div>
          <div className="otherQuickOptions">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt="../../../Images/banner.jpg"
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;
