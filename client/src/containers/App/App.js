import React, { Component } from 'react';
import './App.css';
import "../../style/header.css"
import Menu from '../../components/Menu/menu.js'
import About from '../../components/About/about.js'
import Header from '../../components/Header/header.js'
import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoriesOverview from "../../components/Categories/CategoriesOverview/CategoriesOverview"
import CategoriesNavOverview from "../../components/Categories/CategoriesOverview/categoriesNavOverView"

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
