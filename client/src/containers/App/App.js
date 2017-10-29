import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/menu.js'
import Home from '../../components/home.js'
import About from '../../components/about.js'
import Categories from '../../components/categories.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoriesOverview from "./CategoriesOverview"
class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Menu   />
          <hr />
          <Route exact path="/" component={CategoriesOverview} />
          <Route path="/about" component={About} />
          <Route path="/categories" component={Categories} />
        </div>
      </Router>


    );
  }
}

export default App;
