import React from 'react';
import {NavItem, NavLink } from 'reactstrap';
 
  function CategoryItem(props){   
     return (<NavItem><NavLink  href="#">{props.categoryItem.title}</NavLink></NavItem>);
 
}
export default CategoryItem
 