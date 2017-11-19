import React from 'react';
import './CategoriesOverview/category.css';
import { Link } from 'react-router-dom';

function CategoryIcon(props) {
    return (
        <div className="category-icon">
<<<<<<< HEAD
            <div className="icon-border"></div>
            <div className="icon-border-cros"></div>
=======
>>>>>>> 45a2f13a3da2388636b49b36c31b5d5f3c8a96d3
            <Link to={props.href}><img src={props.src} alt={props.alt} /></Link>
        </div>
    );
}

export default CategoryIcon;