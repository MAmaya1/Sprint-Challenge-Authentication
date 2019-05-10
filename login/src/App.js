import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Header/>
      <Route to="/login" component={Login}/>
      {/* <Route to="/register" component={Register}/> */}
    </Router>
  );
}

export default App;
