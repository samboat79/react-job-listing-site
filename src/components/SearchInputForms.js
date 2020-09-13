import React from "react"
import react, { Component } from 'react';

class SearchInputForms extends Component {
  render() {
    return (
      <div className="catagory_area">
        <div className="flex container align-items-center">
            <form id="searchForm" onSubmit={this.onSubmit}>
              <div className="row cat_search m-0 p-0">
                <div className="col-lg-3 col-md-4">
                  
                  <input
                    type="text"
                    className="form-control"
                    name="keywordText"
                    placeholder="Search Keyword"
                  />
                </div>
                <div className="col-lg-3 col-md-4 flex">
                  <input
                    type="text"
                    className="form-control"
                    name="locationText"
                    placeholder="Location"  
                  />
                </div>
                <div className="col-lg-3 col-md-4">
                  <div className="inline-field d-flex justify-content-center">
                    <label className="align-content-center m-0 p-0" htmlFor="contractText">
                    <input
                      id="chkbx"
                      type="checkbox"
                      className="inline-field align-middle"
                      name="contractText"
                    />
                      <span className="d-inline flex align-middle pl-sm-3">Full Time</span>
                    </label>
                  </div>
                </div>
                <div className="col-lg-3 col-md-12">
                  <button type="submit" className="boxed-btn3">
                    Find Job
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
    )
  }
}
export default SearchInputForms;