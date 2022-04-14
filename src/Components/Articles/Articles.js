import React from 'react';


import './Articles.css';
import {useHistory} from 'react-router-dom'

function Articles() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
      <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Articles</span>
        </div>
        <div  className="heading">
          <span>Programming Language</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/prolang/c.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">C</p>
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
              <img src="../../../Images/event/1.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">C++</p>
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
              <img src="../../../Images/event/2.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">C#</p>
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
              <img src="../../../Images/event/3.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Java</p>
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
              <img src="../../../Images/weblang/angular.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Python</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        
        </div> 
        </div>

        <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Web Technologies</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/prolang/c.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">HTML</p>
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
              <img src="../../../Images/event/1.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">CSS</p>
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
              <img src="../../../Images/event/2.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">JavaScrpit</p>
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
              <img src="../../../Images/event/3.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">ReactJS</p>
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
              <img src="../../../Images/weblang/angular.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Angular</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        
        </div> 
      </div>
      </div>
      </div> 


        <div className="postParentDiv">
      <div className="recommendations">
        <div className="heading">
          <span>Smart Device Programming</span>
        </div>
        <div className="heading">
          <span>Android</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
            <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/prolang/c.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Java</p>
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
              <img src="../../../Images/event/1.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Kotlin</p>
            </div>
            <div className="date">
              <span></span>
            </div>
          </div>
        </div>
        </div>
        <div className="heading">
          <span>iOS</span>
        </div>
      
      
        
        <div className="cards">
          <div className="card">
            <div className="favorite">
            
            </div>
        <div className="image" onClick={()=>history.push('/')}>
              <img src="../../../Images/event/1.png" alt="" />
            </div>
            <div className="content">
              <p className=""> </p>
              <span className=""></span>
              <p className="name">Swift</p>
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

export default Articles;
