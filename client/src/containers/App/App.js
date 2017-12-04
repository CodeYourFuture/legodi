import React, { Component } from 'react';
import './App.css';
import Menu from '../../components/Menu/menu.js'
import About from '../../components/About/about.js'
import Footer from '../../components/Footer/Footer.js'
 import { BrowserRouter as Router, Route } from "react-router-dom";
import CategoriesOverview from "../../components/Categories/CategoriesOverview/CategoriesOverview"
import SingleArticle from "../../containers/SingleArticle/SingleArticle";
import SingleCategory from "../../components/Categories/SingleCategory";
import Setting from "../Setting/Setting";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Menu />  
          <Route exact path="/" component={CategoriesOverview} />
          <Route path="/about" component={About} />
          <Route path="/settings" component={Setting} />
          <Route path="/categories" exact component={CategoriesOverview} /> 
          <Route path="/articles/:articleId" component={SingleArticle} />
          <Route path="/categories/:categoryId" component={SingleCategory} />
          <Footer />
        </div>
      </Router>
    );
  }
  
}

export default App;
