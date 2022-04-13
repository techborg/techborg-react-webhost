import React from 'react';


import './Careers.css';
import {Button,ButtonGroup} from 'react-bootstrap';
import {useHistory} from 'react-router-dom'

function Careers() {
  const history = useHistory()
  return (
    <div className="postParentDiv">
      <div>

      </div>
           
        <section class="slider_section ">
      <div class="container ">
        <div class="row">
          <div class="col-lg-7 col-md-8 mx-auto">
            <div class="detail-box">
              <h1>
                Build Your <br/>
                POWERFUL CAREER
              </h1>
              <p>
                when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to
              </p>
            </div>
          </div>
        </div>
        <div class="find_container ">
          <div class="container">
            <div class="row">
              <div class="col">
                <form>
                  <div class="form-row ">
                    <div class="form-group col-lg-3">
                      <input type="text" class="form-control" id="inputPatientName" placeholder="Keywords"/>
                    </div>
                    <div class="form-group col-lg-3">
                      <select name="" class="form-control wide" id="inputDoctorName">
                        <option value="Normal distribution ">All Locations</option>
                        <option value="Normal distribution ">Bengaluru </option>
                        <option value="Normal distribution ">Chennai </option>
                        <option value="Normal distribution ">Kochi </option>
                      </select>
                    </div>
                    <div class="form-group col-lg-3">
                      <select name="" class="form-control wide" id="inputDepartmentName">
                        <option value="Normal distribution ">SEO Expert </option>
                        <option value="Normal distribution ">Web Designer </option>
                        <option value="Normal distribution ">Web Developer</option>
                        <option value="Normal distribution ">Graphic Designer</option>
                        <option value="Normal distribution ">Content Writer</option>
                        <option value="Normal distribution ">React Developer</option>
                        <option value="Normal distribution ">Angular Developer</option>
                      </select>
                    </div>
                    <div class="form-group col-lg-3">
                      <div class="btn-box">
                        <button type="submit" class="btn ">Submit Now</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <ul class="job_check_list">
              <li class=" ">
                <input id="checkbox_qu_01" type="checkbox" class="styled-checkbox"/>
                <label for="checkbox_qu_01">
                  Freelancer
                </label>
              </li>
              <li class=" ">
                <input id="checkbox_qu_02" type="checkbox" class="styled-checkbox"/>
                <label for="checkbox_qu_02">
                  Part Time
                </label>
              </li>
              <li class=" ">
                <input id="checkbox_qu_03" type="checkbox" class="styled-checkbox"/>
                <label for="checkbox_qu_03">
                  Full Time
                </label>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="job_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          RECENT &amp; FEATURED JOBS
        </h2>
      </div>
      <div class="job_container">
        <h4 class="job_heading">
          Featured Jobs
        </h4>
        <div class="row">
          <div class="col-lg-6">
            <div class="box">
              <div class="job_content-box">
                <div class="img-box">
                  <img src="images/job_logo1.png" alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Development Team Lead
                  </h5>
                  <div class="detail-info">
                    <h6>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Washington. D.C.
                      </span>
                    </h6>
                    <h6>
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <span>
                      &#x20B9;12000 - &#x20B9;13000
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="option-box">
                
                <a href="" class="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="box">
              <div class="job_content-box">
                <div class="img-box">
                  <img src="images/job_logo2.png" alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Make my website responsive device compatible
                  </h5>
                  <div class="detail-info">
                    <h6>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        New York
                      </span>
                    </h6>
                    <h6>
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <span>
                      &#x20B9;2000 - &#x20B9;3400
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="option-box">
                
                <a href="" class="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="job_container">
        <h4 class="job_heading">
          Recent Jobs
        </h4>
        <div class="row">
          <div class="col-lg-6">
            <div class="box">
              <div class="job_content-box">
                <div class="img-box">
                  <img src="images/job_logo3.png" alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Looking Graphic Designer (Logo + UI)
                  </h5>
                  <div class="detail-info">
                    <h6>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Washington. D.C.
                      </span>
                    </h6>
                    <h6>
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <span>
                      &#x20B9;12000/mo
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="option-box">
                
                <a href="" class="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="box">
              <div class="job_content-box">
                <div class="img-box">
                  <img src="images/job_logo6.png" alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Are you Typography Expert?
                  </h5>
                  <div class="detail-info">
                    <h6>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        New York
                      </span>
                    </h6>
                    <h6>
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <span>
                      &#x20B9;5600 - &#x20B9;9000
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="option-box">
                
                <a href="" class="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="box">
              <div class="job_content-box">
                <div class="img-box">
                  <img src="images/job_logo5.png" alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Looking WordPress Developer for ThemeForest
                  </h5>
                  <div class="detail-info">
                    <h6>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Washington. D.C.
                      </span>
                    </h6>
                    <h6>
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <span>
                      &#x20B9;4000 - &#x20B9;5400
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="option-box">
               
                <a href="" class="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="box">
              <div class="job_content-box">
                <div class="img-box">
                  <img src="images/job_logo4.png" alt=""/>
                </div>
                <div class="detail-box">
                  <h5>
                    Hiring Web Designer for Project
                  </h5>
                  <div class="detail-info">
                    <h6>
                      <i class="fa fa-map-marker" aria-hidden="true"></i>
                      <span>
                        Washington. D.C.
                      </span>
                    </h6>
                    <h6>
                      <i class="fa fa-money" aria-hidden="true"></i>
                      <span>
                      &#x20B9;3500 - &#x20B9;4500
                      </span>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="option-box">
                
                <a href="" class="apply-btn">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5 col-md-8 mx-auto">
      <Button variant="secondary" onClick={()=>history.push('/')}>View All</Button>
      </div>
    </div>
  </section>
  <section class="expert_section layout_padding">
    <div class="container">
      <div class="heading_container heading_center">
        <h2>
          LOOKING FOR EXPERTS?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam nulla mauris
          iaculis. Erat eget vitae malesuada, tortor tincidunt porta lorem lectus.
        </p>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="images/e1.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <a href="">
                Martin Anderson
              </a>
              <h6 class="expert_position">
                <span>
                  Web Anaylzer
                </span>
                <span>
                  41 Jobs Done
                </span>
              </h6>
              <span class="expert_rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </span>
              <p>
                Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                nulla
                mauris iaculis.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="images/e2.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <a href="">
                Semanta Klores
              </a>
              <h6 class="expert_position">
                <span>
                  Graphic Designer
                </span>
                <span>
                  32 Jobs Done
                </span>
              </h6>
              <span class="expert_rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </span>
              <p>
                Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                nulla
                mauris iaculis.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4 mx-auto">
          <div class="box">
            <div class="img-box">
              <img src="images/e3.jpg" alt=""/>
            </div>
            <div class="detail-box">
              <a href="">
                Ryan Martines
              </a>
              <h6 class="expert_position">
                <span>
                  SEO Expert
                </span>
                <span>
                  27 Jobs Done
                </span>
              </h6>
              <span class="expert_rating">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
              </span>
              <p>
                Lorem ipsum dolor sit amet, non odio tincidunt ut ante, lorem a euismod suspendisse vel, sed quam
                nulla
                mauris iaculis.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn-box">
        <a href="">
          View All Freelancers
        </a>
      </div>
    </div>
    <br/>
    
  </section>     
        </div>
          
  );
}

export default Careers;
