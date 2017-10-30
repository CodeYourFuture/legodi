import React, { Component } from 'react';
import './App.css';
import "../../style/components.css"
import Menu from '../../components/menu.js'
import About from '../../components/about.js'
import Header from '../../components/header.js'
 import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoriesOverview from "../CategoriesOverview/CategoriesOverview"
import CategoriesNavOverview from "../CategoriesOverview/categoriesNavOverView"

class App extends Component {
  render() {
    return (

      <Router>
        <div>
           <Header headerTitle={"Legodi"}
            headerDesc={"Digital Welcome Pack For Refugee in Glasgow"} />
          <Menu   />
          <hr />
          <Route exact path="/" component={CategoriesNavOverview} />
          <Route path="/about" component={About} />
          <Route path="/categories" component={CategoriesOverview} />
 
        </div>
      </Router>


    );
  }
}

export default App;
