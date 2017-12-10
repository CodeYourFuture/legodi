import React from 'react';
import './CategoryCard.css';
import './CategoriesOverview/category.css';
import { Link } from 'react-router-dom';


 function CategoryCard(props) {
   return (
     <Link to={props.href}>
       <div className="category-card">
         <div className="category-icon">
           <div className="icon-border"></div>
           <div className="icon-border-cros"></div>
           <img src={props.src} alt={props.alt} />
         </div>
         {props.title}
       </div>
     </Link>
  );
}
export default CategoryCard;

