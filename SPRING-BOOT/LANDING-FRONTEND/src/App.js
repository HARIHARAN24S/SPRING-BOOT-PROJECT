import React from 'react';

import logo from './logo.svg';

import './App.css';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import ListCricinfoComponent from './components/ListCricinfoComponent';

import HeaderComponent from './components/HeaderComponent';

import FooterComponent from './components/FooterComponent';

import CreateCricinfoComponent from './components/CreateCricinfoComponent';

import UpdateCricinfoComponent from './components/UpdateCricinfoComponent';

import ViewCricinfoComponent from './components/ViewCricinfoComponent';

 

function App() {

  return (

    <div>

        <Router>

              <HeaderComponent />

                <div className="container">

                    <Switch>

                          <Route path = "/" exact component = {ListCricinfoComponent}></Route>

                          <Route path = "/cricinfos" component = {ListCricinfoComponent}></Route>

                          <Route path = "/add-cricinfo/:id" component = {CreateCricinfoComponent}></Route>

                          <Route path = "/view-cricinfo/:id" component = {ViewCricinfoComponent}></Route>

                          {/* <Route path = "/update-cricinfo/:id" component = {UpdateCricinfoComponent}></Route> */}

                    </Switch>

                </div>

              <FooterComponent />

        </Router>

    </div>

   

  );

}

 

export default App;