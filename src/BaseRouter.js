import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Opened from './components/Opened';
import Closed from './components/Closed';

function BaseRouter() {
  return (
    <div className="base-router">
         <Router>
      <div>
        <Header />        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/opened">
            <Opened />
          </Route>
          <Route path="/closed">
            <Closed />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>    
  );
}


  

export default BaseRouter;
