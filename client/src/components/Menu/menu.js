import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './menu.css'
import CategoryDropMenu from './CategoryDropMenu';
import { withRouter } from "react-router-dom";

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      categoryDropMenu: false
    }
  }

  goToUrl = (url) => {
    this.setState({
      categoryDropMenu: false
    })
    this.props.history.push(url)
  }

  dropMenuShow = () => {
    if (this.state.categoryDropMenu) {
      return <CategoryDropMenu goToUrl={this.goToUrl} />
    }
  }

  onclickChange = () => {
    this.setState({
      categoryDropMenu: !this.state.categoryDropMenu
    })
  }
  render() {
    return (
      <nav className="menu">
        <ul>
          <li onClick={this.onclickChange}><img src="/icons/menu-menu.png" alt="" /></li>
          <li><Link to="/categories"><img src="/icons/menu-info.png" alt="" /></Link></li>
          <li><Link to="/settings"><img src="/icons/menu-setting.png" alt="" /></Link></li>
          <li><Link to="/weegie"><img width="35" src="weegie.png" /></Link></li>
          <li><Link to="/about"><img src="/icons/menu-login.png" alt="" /></Link></li>
        </ul>
        {this.dropMenuShow()}
      </nav>
    )
  }
}


export default withRouter(Menu);