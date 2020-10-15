
import {
    FILTERJOBS,
    FETCHJOBS,
    FETCHJOBDETAILS
  } from '../actions/actionType';
  
  const initialState = {
    
    jobs: [],
    location: "",
    description: "",
    fullTime: "",
    job: []
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case FILTERJOBS:
        return {
          ...state,
          description: action.description,
          location:action.location,
          fullTime:action.fullTime

        };
      case FETCHJOBS:
        return {
          ...state,
          jobs: action.payload,
          loading: false
        };
      case FETCHJOBDETAILS:
        return {
          ...state,
          job: action.payload,
          loading: false
        };
     
      default:
        return state;
    }
  }