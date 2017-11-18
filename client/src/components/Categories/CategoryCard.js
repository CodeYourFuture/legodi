import React from 'react';
import './CategoriesOverview/category.css';
// import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
// import './CategoriesOverview/category.css';
function CategoryCard(props) {
  return (
    <div className="category-card">
          <img src={props.src} />
          <h1>{props.title}</h1>
      </div>
  );
}

export default CategoryCard
