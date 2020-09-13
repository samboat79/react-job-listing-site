import React from "react";
import ReactDOM from 'react-dom';
import react, { Component } from 'react';



class JobDetails extends Component{
    render() {
        return(
            <div className="job_details_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="img/svg_icon/1.svg" alt="" />
                                </div>
                                <div className="jobs_content">
                                    <a href="#"><h4>Software Engineer</h4></a>
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
                                    <a className="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <h4>Job description</h4>

                        </div>
                    </div>
                    <div className="apply_job_form white-bg">
                        <h4>Apply for the job</h4>
                       
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input_field">
                                        <input type="text" placeholder="Your name"/>
                                    </div>
                                </div>
                               
                              
                                </div>
                             
                              
                            </div>
                       
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="summary_header">
                            <h3>Job Summary</h3>
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
                </div>
            </div>
        </div>
    

        )
    }
}

export default JobDetails;
