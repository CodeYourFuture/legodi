import React from 'react';
import './CategoriesOverview/category.css';
import { Link } from 'react-router-dom';

function CategoryIcon(props) {
    return (
        <div className="category-icon">
            <Link to={props.href}><img src={props.src} alt={props.alt} /></Link>
        </div>
    );
}

export default CategoryIcon;