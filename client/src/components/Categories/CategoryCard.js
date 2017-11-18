import React from 'react';
import './CategoriesOverview/category.css';
import CategoryIcon from './CategoryIcon'
// import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
// import './CategoriesOverview/category.css';
function CategoryCard(props) {
  return (
    <div className="category-card">
      <CategoryIcon {...props} />
      </div>
  );
}

export default CategoryCard
