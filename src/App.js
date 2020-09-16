import React from 'react';
import './App.css';
import FooterSection from "./components/FooterSection"
import HeaderSection from "./components/HeaderSection"
import SearchInputForms from "./components/SearchInputForms"
import JobListing from "./components/JobListing";
import JobDetails from "./components/JobDetails"
import {BrowserRouter, Route} from "react-router-dom";




class App extends React.Component {
  render() {
    return(
  <div>
    <HeaderSection />

  <BrowserRouter>
    <Route exact path="/" component={JobListing} />
    <Route path="/details/:id" component={JobDetails} />
  </BrowserRouter>
)
  <FooterSection />
</div>
   );
    }
  }


export default App;
