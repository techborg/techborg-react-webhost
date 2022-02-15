import React from 'react';
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';

import './Header.css';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
function Header() {
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          {}
           <h1>TECHBORG</h1>
        </div>
        {/* <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div> */}
        {/*<div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find your things....."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
          </div>*/}
          
          <div className="language">
          <span>Innovation</span>
          <Arrow></Arrow>
        </div>
          <div className="language">
          <span>Projects</span>
          <Arrow></Arrow>
        </div>
          <div className="language">
          <span>Computer Science</span>
          <Arrow></Arrow>
        </div>
          <div className="language">
          <span>Robotics</span>
          <Arrow></Arrow>
        </div>
          <div className="language">
          <span>Drones</span>
          <Arrow></Arrow>
        </div>
          <div className="language">
          <span>AI</span>
          <Arrow></Arrow>
        </div>
        <div className="language">
          <span> Menu </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>Login</span>
          <hr />
        </div>
        {/* <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
