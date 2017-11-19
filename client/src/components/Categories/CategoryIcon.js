import React from 'react';
import './CategoriesOverview/category.css';
import { Link } from 'react-router-dom';

function CategoryIcon(props) {
    return (
        <div className="category-icon">
            <div className="icon-border"></div>
            <div className="icon-border-cros"></div>
            <Link to={props.href}><img src={props.src} alt={props.alt} /></Link>
        </div>
    );
}

export default CategoryIcon;