import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'

import './stylesheets/index.scss';
import './stylesheets/reset.scss';
import './stylesheets/mediaQueries.scss';

import LandingPageForm from './components/LandingPageForm.jsx'
import Header from './components/Header.jsx'
import Scorecard from './components/Scorecard.jsx'
import HoleMenu from './components/HoleMenu.jsx'

// const BASE_URL = 'http://localhost:3000'
// const store = createStore()

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Header}/>
    <Route exact path='/' component={LandingPageForm}/>
    <Route path='/scorecard' component={HoleMenu}/>
    <Route exact path='/scorecard' component={Scorecard}/>
  </Router>,
  document.getElementById('root')
);