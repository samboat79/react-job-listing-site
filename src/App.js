import React from 'react';
import {Provider} from "react-redux";
import './App.css';
import FooterSection from "./components/FooterSection"
import HeaderSection from "./components/HeaderSection"
import JobListing from "./components/JobListing";
import JobDetails from "./components/JobDetails"
import {BrowserRouter, Route} from "react-router-dom";

import store from "./store";




class App extends React.Component {
  render() {
    return(
      <Provider store={store}>
  <div>
    <HeaderSection />

  <BrowserRouter>
    <Route exact path="/" component={JobListing} />
    <Route path="/details/:id" component={JobDetails} />
  </BrowserRouter>
)
  <FooterSection />
</div>
 </Provider>
   );
    }
  }


export default App;
