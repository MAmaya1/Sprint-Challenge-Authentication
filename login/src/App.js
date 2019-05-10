import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';
import Jokes from './components/Jokes';

function App() {
  return (
    <div>
      <Header/>
      <Route path="/login" component={Login}/>
      {/* <Route to="/register" component={Register}/> */}
      <Route path="/jokes" component={Jokes}/>
    </div>
  );
}

export default withRouter(App);
