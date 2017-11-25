import React from 'react';
import CategoryIcon from './CategoryIcon';
import './CategoryCard.css';

 function CategoryCard(props) {
     return (
       <div className="category-card">
         <CategoryIcon {...props} />
       </div>
  );
}
export default CategoryCard;