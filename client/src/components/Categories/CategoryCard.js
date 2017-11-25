import React from 'react';
import { CardLink, Row, Card, CardText, CardBody, CardTitle, Button, CardImg, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import CategoryIcon from './CategoryIcon';
import './CategoryCard.css';

 function CategoryCard(props) {
     return (
       <div className="category-card">
         <CategoryIcon {...props} />
         {props.title}
       </div>
  );
}
export default CategoryCard;