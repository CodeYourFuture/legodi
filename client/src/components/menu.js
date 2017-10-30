import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Nav, NavItem, NavLink } from 'reactstrap';


function Menu (){
 
        return (
            <div>
             <Nav>
              <NavItem>
                <NavLink ><Link to="/">Home</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="/categories">Categories</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><Link to="/about">About</Link></NavLink>
              </NavItem>
              </Nav>
             
          </div>
        
        )
    }
 

export default Menu