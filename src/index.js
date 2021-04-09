import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPageForm from './components/LandingPageForm.jsx'
import Header from './components/Header.jsx'
import Scorecard from './components/Scorecard.jsx'
// import {Provider} from 'react-redux'
// import {createStore, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'

// const BASE_URL = 'http://localhost:3000'

// const store = createStore()

ReactDOM.render(
  <Router>
    <Route exact path='/' component={Header}/>
    <Route exact path='/' component={LandingPageForm}/>
    <Route exact path='/scorecard' component={Scorecard}/>
  </Router>,
  document.getElementById('root')
);