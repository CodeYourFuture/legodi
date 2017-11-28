import React from 'react';
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