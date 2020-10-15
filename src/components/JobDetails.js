import React from "react";
import { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {fetchJobDetails} from "../actions/searchActions";
import DOMPurify from 'dompurify';

class JobDetails extends Component{

    componentDidMount(){
        this.props.fetchJobDetails (this.props.match.params.id);
      }

render() { 


        let jobDetails = (

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
                                    <img src={this.props.job.company_logo} style={{height:"100%"}} alt="" />
                                </div>
                                <div className="jobs_content">
                              
                                    <h4>{this.props.job.title}</h4>
                                    <div className="links_locat d-flex align-items-center">
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> {this.props.job.location}</p>
                                        </div>
                                        <div className="location">
                                            <p> <i className="fa fa-clock-o"></i> {this.props.job.type}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <Link className="heart_mark" to={'/job_details/'+fetchJobDetails.id}> <i className="ti-heart"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <h4>Job description</h4>
                            { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(this.props.job.description) }} /> }
                        </div>

                    </div>
                    <div className="apply_job_form white-bg">
                        <h4>Apply for the job</h4>
                        <form action="#">
                            <div className="row">
                                
                                
                                <div className="col-md-12">
                                    
                                </div>
                                
                                <div className="col-md-12">
                                    <div className="submit_btn">
                                        <a className="boxed-btn3 w-100" href={this.props.job.url} target="_blank">Apply Now</a>
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
                                <li>Published on: <span>{this.props.job.created_at}</span></li>
                                <li>Salary: <span>50k - 120k/y</span></li>
                                <li>Location: <span>{this.props.job.location}</span></li>
                                <li>Job Nature: <span>{this.props.job.type}</span></li>
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
  

    return(
        <div>{jobDetails}</div>
    );
};
}
const mapStateToProps = (state) => {
    return {
        job: state.jobs.job,
      
    }
  }
   
  const mapDispatchToProps = {
    fetchJobDetails
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);