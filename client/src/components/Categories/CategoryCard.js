import React from 'react';
import './CategoryCard.css';
import './CategoriesOverview/category.css';
import { Link } from 'react-router-dom';


 function CategoryCard(props) {
   return (
     <div className="category-card">
       <div className="category">
         <Link to={props.href}>  
            <div className="category-icon">
              <div className="icon-border"></div>
              <div className="icon-border-cros"></div>
              <img src={props.src} alt={props.alt} />
            </div>
            <div className="category-title"> {props.title}</div>
         </Link>
        </div>
      </div>
     
  );
}
export default CategoryCard;

