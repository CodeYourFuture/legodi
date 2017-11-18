import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import './menu.css'
import menuIcon from './fwddesignhelp/menu-menu.png';
import menuInfo from './fwddesignhelp/menu-info.png';
import menuSetting from './fwddesignhelp/menu-setting.png';
import menuLogin from './fwddesignhelp/menu-login.png';

function Menu() {

  return (
    <nav className="menu">
      <ul>
        <li><Link to="/"><img src={menuIcon} alt=""/></Link></li>
        <li><Link to="/categories"><img src={menuInfo} alt=""/></Link></li>
        <li><Link to="/articles"><img src={menuSetting} alt="" /></Link></li>
        <li><Link to="/about"><img src={menuLogin} alt=""/></Link></li>
      </ul>
    </nav>
  )
}


export default Menu