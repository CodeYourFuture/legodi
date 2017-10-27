import React, { Component } from 'react';
import Home from './home.js'
import About from './about.js'
import Categories from './categories.js'
 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Menu extends Component {
    render() {
        return (
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/categories">Categories</Link></li>
                        <li><Link to="/about">About</Link></li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route path="/categories" component={Categories} />
                    <Route path="/about" component={About} />


                </nav>
            </Router>
        )
    }
}

export default Menu