import React from 'react';
import './CategoriesOverview/category.css';
import CategoryIcon from './CategoryIcon'

function CategoryCard(props) {
  return (
    <div className="category-card">
      <CategoryIcon {...props} />
    </div>
  );
}

export default CategoryCard
