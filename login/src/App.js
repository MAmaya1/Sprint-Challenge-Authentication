import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Login from './components/Login';
import Register from './components/Register';
import Jokes from './components/Jokes';

function App() {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={LandingPage}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route path="/jokes" component={Jokes}/>
    </div>
  );
}

export default withRouter(App);
