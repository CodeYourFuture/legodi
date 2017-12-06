import React, { Component } from 'react';
import './menu.css';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

function CategoryDropMenuIcon(props) {
    return (
        <div className="category-card">
            <div className="category-icon">
                <button conClick={() => {props.history.push('/categories/5a237266457b4c069453ec68') }} to={props.href}><img src={props.src} alt={props.alt} /></button>
            </div>
        </div>
    );
}

export default CategoryDropMenuIcon;