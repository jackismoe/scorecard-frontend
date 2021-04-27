import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import appReducer from './appReducer'



import './stylesheets/index.scss';
import './stylesheets/reset.scss';
import './stylesheets/mediaQueries.scss';
import './stylesheets/scorecard.scss';

// commented for prod tests with netlify; need to find fix for router to be compatible
// import LandingPageForm from './components/LandingPageForm.jsx'
// import Header from './components/Header.jsx'
import HeaderWithHoles from './components/HeaderWithHoles.jsx'
import Scorecard from './components/Scorecard.jsx'
import HoleMenu from './components/HoleMenu.jsx'

// need to look into combineReducers
const store = createStore(appReducer, applyMiddleware(thunk))

const BASE_URL = 'http://localhost:3001'
export default BASE_URL

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* commented for prod tests with netlify; need to find fix for router to be compatible */}
      {/* <Route exact path='/' component={Header}/>
      <Route exact path='/' component={LandingPageForm}/> */}
      <Route path='/' component={HeaderWithHoles}/>
      <Route path='/' component={HoleMenu}/>
      <Route path='/' component={Scorecard}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);