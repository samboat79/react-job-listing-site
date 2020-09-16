import React from "react";
import react, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

class JobDetails extends Component{
    displayJobPage(){
        return(
            <div className="col-lg-12 col-md-12">
</div>
        
    );
    }

render() { 
    return (
        <div className="job_details_area">
        <div className="container">
        <Link className="boxed-btn3" to={'/'}> Go back to Search
            </Link>
            <div className="row">
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="img/svg_icon/1.svg" alt="" />
                                </div>
                                <div className="jobs_conetent">
                              
                                    <h4>Software Engineer</h4>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> California, USA</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> Part-time</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <a className="heart_mark" href="#"> <i className="ti-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <h4>Job description</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                            <p>Variations of passages of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                        </div>
                        <div className="single_wrap">
                            <h4>Responsibility</h4>
                            <ul>
                                <li>The applicants should have experience in the following areas.
                                </li>
                                <li>Have sound knowledge of commercial activities.</li>
                                <li>Leadership, analytical, and problem-solving abilities.</li>
                                <li>Should have vast knowledge in IAS/ IFRS, Company Act, Income Tax, VAT.</li>
                            </ul>
                        </div>
                        <div className="single_wrap">
                            <h4>Qualifications</h4>
                            <ul>
                                <li>The applicants should have experience in the following areas.
                                </li>
                                <li>Have sound knowledge of commercial activities.</li>
                                <li>Leadership, analytical, and problem-solving abilities.</li>
                                <li>Should have vast knowledge in IAS/ IFRS, Company Act, Income Tax, VAT.</li>
                            </ul>
                        </div>
                        <div className="single_wrap">
                            <h4>Benefits</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing.</p>
                        </div>
                    </div>
                    <div className="apply_job_form white-bg">
                        <h4>Apply for the job</h4>
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input_field">
                                        <input type="text" placeholder="Your name" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input_field">
                                        <input type="text" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input_field">
                                        <input type="text" placeholder="Website/Portfolio link" /> 
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                          <button type="button" id="inputGroupFileAddon03"><i className="fa fa-cloud-upload" aria-hidden="true"></i>
                                          </button>
                                        </div>
                                        <div className="custom-file">
                                          <input type="file" className="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03" />
                                          <label className="custom-file-label" for="inputGroupFile03">Upload CV</label>
                                        </div>
                                      </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input_field">
                                        <textarea name="#" id="" cols="30" rows="10" placeholder="Coverletter"></textarea>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="submit_btn">
                                        <button className="boxed-btn3 w-100" type="submit">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="summery_header">
                            <h3>Job Summery</h3>
                        </div>
                        <div className="job_content">
                            <ul>
                                <li>Published on: <span>12 Nov, 2019</span></li>
                                <li>Vacancy: <span>2 Position</span></li>
                                <li>Salary: <span>50k - 120k/y</span></li>
                                <li>Location: <span>California, USA</span></li>
                                <li>Job Nature: <span> Full-time</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="share_wrap d-flex">
                        <span>Share at:</span>
                        <ul>
                            <li><a href="#"> <i className="fa fa-facebook"></i></a> </li>
                            <li><a href="#"> <i className="fa fa-google-plus"></i></a> </li>
                            <li><a href="#"> <i className="fa fa-twitter"></i></a> </li>
                            <li><a href="#"> <i className="fa fa-envelope"></i></a> </li>
                        </ul>
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    
    );
};
}

export default JobDetails;