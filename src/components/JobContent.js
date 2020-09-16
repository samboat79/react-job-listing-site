import React from "react";
import react, { Component } from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router-dom';

class JobContent extends Component{
    render(){
        return(
            <div className= "col-lg-12 col-md-12">
            <div className="single_jobs white-bg d-flex justify-content-between">
            <div className="jobs_left d-flex align-items-center">
                <div className="Namethumb">
                    <img src="img/svg_icon/1.svg" alt="" />
                </div>
                <div className="jobs_conetent">
                    <Link className="col-lg-12" to={'/details/1'}>
                    <h4>Software Engineer</h4>
          </Link>
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
                    <Link className="boxed-btn3" to={'/details/1'}>Apply Now
            <i className="fas fa-chevron-right" />
          </Link>
                </div>
                <div className="date">
                    <p>Date line: 31 Jan 2020</p>
                </div>
            </div>
        </div>
        </div>

   
        )
    }
}

export default JobContent;



