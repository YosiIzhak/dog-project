import React, { } from 'react';
import './App.css';
import Login from './components/login'
import People from './components/index';
import Home from './components/home';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
function App() {
 
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/form">
            <Login />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/">
          <a href="https://www.google.com/" className="exitLink">Exit</a>
          <Link to="/" className="homeLink">Home</Link>
          </Route>

        </div>
      </Router>


    
    </div>
  );
}

export default App;
