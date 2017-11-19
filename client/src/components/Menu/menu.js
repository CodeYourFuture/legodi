import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './menu.css'
import menuIcon from './fwddesignhelp/menu-menu.png';
import menuInfo from './fwddesignhelp/menu-info.png';
import menuSetting from './fwddesignhelp/menu-setting.png';
import menuLogin from './fwddesignhelp/menu-login.png';
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
          <li onClick={this.onclickChange}><img src={menuIcon} alt="" /></li>
          <li><Link to="/categories"><img src={menuInfo} alt="" /></Link></li>
          <li><Link to="/articles"><img src={menuSetting} alt="" /></Link></li>
          <li><Link to="/about"><img src={menuLogin} alt="" /></Link></li>
        </ul>
        {this.dropMenuShow()}
      </nav>

    )
  }
}


export default Menu