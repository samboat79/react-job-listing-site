import React from "react";
import { Component } from 'react';
import JobContent from "./JobContent";
import SearchInputForms from "./SearchInputForms";
import { connect } from 'react-redux';
import {fetchJobs} from "../actions/searchActions"



class JobListing extends Component{

    componentDidMount(){
        this.props.fetchJobs (this.props.description, this.props.fulltime, this.props.location);
      }

    render() {
        return(
            <div>
            <SearchInputForms />
            <div className="job_listing_area pt-5">

            
        <div className="container">
        <div className="job_lists">
            <div className="row">
                <div className="col-lg-12 col-md-12 mb-30">
                    <div className="job_details_header">
                    {this.props.jobs.map((x, i) => 
                <JobContent key={i} job={x} pic={i} />
              )}

                        </div>
                    </div>
                    
                </div>
                </div>
                
            </div>
        </div>
        </div>
    

        )
    }
}

    const mapStateToProps = (state) => {
    return {
        jobs: state.jobs.jobs,
      location: state.jobs.location,
      description: state.jobs.description,
      fulltime: state.jobs.fulltime
    }
  }
   
  const mapDispatchToProps = {
    fetchJobs
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(JobListing);