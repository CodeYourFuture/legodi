import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';

function CategoryDropMenuIcon(props) {
    return (
        <div className="category-card">
            <div className="category-icon">
                <Link to={props.href}><img src={props.src} alt={props.alt} /></Link>
            </div>
        </div>
    );
}

export default CategoryDropMenuIcon;