import { FETCHJOBS, FETCHJOBDETAILS, FILTERJOBS} from './actionType';
import axios from 'axios';


export const filterJobs = (location, description,fullTime) => dispatch => {
  dispatch({
    type: FILTERJOBS,
    description: description,
    location: location,
    fullTime: fullTime
  });
};

export const fetchJobs = (keyword, contract, location) => dispatch => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${keyword}&full_time=${contract}&location=${location}`)
    .then(response =>
      dispatch({
        type: FETCHJOBS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

export const fetchJobDetails = id => dispatch => {
  axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${id}.json`)
    .then(response =>
      dispatch({
        type: FETCHJOBDETAILS,
        payload: response.data
      })
    )
    .catch(err => console.log(err));
};

