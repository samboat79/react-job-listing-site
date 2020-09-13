import React from 'react';
import './App.css';
import FooterSection from "./components/FooterSection"
import HeaderSection from "./components/HeaderSection"
import SearchInputForms from "./components/SearchInputForms"
import JobListingArea from "./components/JobListingArea";
import JobDetails from "./components/JobDetails"

class App extends React.Component {
  render() {
    return(
    <div>
          <HeaderSection />
          <SearchInputForms />
          <JobListingArea />
          <JobDetails />

          <FooterSection />
      </div>
   );
  }
}

export default App;
