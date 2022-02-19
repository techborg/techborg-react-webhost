import React from 'react';
import './Header2.css';
import {useHistory} from 'react-router-dom'

function Header2() {
  const history = useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          {}
           <h1 onClick={()=>history.push('/')}>TECHBORG</h1>
        </div>          
          
    </div>
</div>
  );
}

export default Header2;
