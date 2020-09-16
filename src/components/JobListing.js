import React from "react";
import ReactDOM from 'react-dom';
import react, { Component } from 'react';
import JobContent from "./JobContent";
import SearchInputForms from "./SearchInputForms"


class JobListing extends Component{
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
                    <JobContent />
                    <JobContent />
                    <JobContent />
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

export default JobListing;
