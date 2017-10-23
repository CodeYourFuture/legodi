import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import { BrowserRouter as Router , Route, Link } from "react-router-dom";
 
import Home from '../../component/home.js'
import About from '../../component/about.js'


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
         </ul>
  
        <hr/>
  
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
       </div>
    </Router>
      
    );
  }
}

export default App;
