import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './menu.css'
import CategoryDropMenu from './CategoryDropMenu';

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      CategoryDropMenu: false
    }
  }

  dropMenuShow = () => {
    if (this.state.CategoryDropMenu) {
      return <CategoryDropMenu />
    }
  }

  onclickChange = () => {
    this.setState({
      CategoryDropMenu: !this.state.CategoryDropMenu
    })
  }
  render() {
    return (
      <nav className="menu">
        <ul>
          <li onClick={this.onclickChange}><img src="/icons/menu-menu.png" alt="" /></li>
          <li><Link to="/articles"><img src="/icons/menu-setting.png" alt="" /></Link></li>
          <li><Link to="/categories"><img src="/icons/menu-login.png" alt="" /></Link></li>
           <li><Link to="/about"><img src="/icons/menu-info.png" alt="" /></Link></li>
        </ul>
        {this.dropMenuShow()}
      </nav>

    )
  }
}


export default Menu