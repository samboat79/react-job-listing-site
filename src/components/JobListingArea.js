import React from "react";
import react, { Component } from 'react';
import {render} from 'react-dom';



class JobListingArea extends Component{
    displayJobPage(){
        return(
            <div className="col-lg-12 col-md-12">
                <div className="single_jobs white-bg d-flex justify-content-between">
                    <div className="jobs_left d-flex align-items-center">
                        <div className="thumb">
                            <img src="img/svg_icon/1.svg" alt=""/>
                            </div>
                        <div className="jobs_conetent">
                            <a href="job_details.html"><h4>Creative Designer</h4></a>
                            <div class="links_locat d-flex align-items-center">
                                <div className="location">
                                    <p> <i className="fa fa-map-marker"></i> California, USA</p>
                                </div>
                                <div class="location">
                                    <p> <i className="fa fa-clock-o"></i> Part-time</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jobs_right">
                        <div className="apply_now">
                            <a className="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                        </div>
                        <div class="date">
                            <p>Date line: 31 Jan 2020</p>
                        </div>
                    </div>
                </div>
            </div>
        
    );
    }

render() { 
    return (
      <div className="job_listing_area pt-1">
        <div className="container">
            <div className="job_lists">
                <div className="row">
                </div>
            </div>
        </div>
    </div>
    );
};
}

export default JobListingArea;