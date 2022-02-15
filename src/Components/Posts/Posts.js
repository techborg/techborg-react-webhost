import React from 'react';


import './Post.css';

function Posts() {

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Acticles</span>
          <span>View more</span>
        </div>
        <div className="cards">
          <div
            className="card"
          >
            <div className="favorite">
              
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
          <span>Recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
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
