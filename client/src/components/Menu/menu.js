import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './menu.css'
import CategoryDropMenu from './CategoryDropMenu';
import { withRouter } from "react-router-dom";

const styles = ({
  defualt: {
    backgroundColor: '#205f55'
  },
  active: {
    background: "#0f352e"
  }
});

class Menu extends Component {

  constructor() {
    super();
    this.state = {
      categoryDropMenu: false,
      home: true,
      about: false,
      setting: false,
      weegie: false
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
          <li onClick={() => {
            this.setState({
              home: true,
              about: false,
              setting: false,
              weegie: false
            })
          }}
            style={this.state.home === false ? styles.active : styles.defualt}>
          <Link to="/"><img src="/icons/menu-menu.png" alt="" /></Link></li>
          <li onClick={() => {
            this.setState({
              weegie: true,
              home: false,
              about: false,
              setting: false
            })
          }}
            style={this.state.weegie === false ? styles.active : styles.defualt}>
          <Link to="/weegie"><img width="35" src="weegie.png" /></Link></li>
          <li onClick={() => {
            this.setState({
              weegie: false,
              home: false,
              about: true,
              setting: false
            })
          }}
            style={this.state.about === false ? styles.active : styles.defualt}>
          <Link to="/about"><img src="/icons/menu-info.png" alt="" /></Link></li>
          <li onClick={() => {
            this.setState({
              weegie: false,
              home: false,
              about: false,
              setting: true
            })
          }}
            style={this.state.setting === false ? styles.active : styles.defualt}>
          <Link to="/settings"><img src="/icons/menu-setting.png" alt="" /></Link></li>
        </ul>
        {this.dropMenuShow()}
      </nav>
    )
  }
}


export default withRouter(Menu);