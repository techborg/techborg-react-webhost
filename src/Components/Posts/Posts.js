import React from 'react';

import Heart from '../../assets/Heart';
import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/" alt="" />
            </div>
            <div className="content">
              <p className="rate"> </p>
              <span className="kilometer"></span>
              <p className="name"> </p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/" alt="" />
            </div>
            <div className="content">
              <p className="rate"> </p>
              <span className="kilometer"></span>
              <p className="name"></p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
