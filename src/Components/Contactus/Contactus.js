import React from 'react';


import './Contactus.css';
import {useHistory} from 'react-router-dom'

function IT() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
        
      <div class="wrapper">
<div class="inner">
<form action="">
<h3>Contact Us</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
<label class="form-group">
<input type="text" class="form-control" required></input>
<span>Your Name</span>
<span class="border"></span>
</label>
<label class="form-group">
<input type="text" class="form-control" required></input>
<span for="">Your Mail</span>
<span class="border"></span>
</label>
<label class="form-group">
<textarea name="" id="" class="form-control" required></textarea>
<span for="">Your Message</span>
<span class="border"></span>
</label>
<button  class="btn" >Submit</button>
</form>
</div>
</div>
            
        </div>
    
      
  );
}

export default IT;
