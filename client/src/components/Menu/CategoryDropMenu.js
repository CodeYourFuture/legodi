import React, { Component, Link } from 'react';
import CategoryDropMenuIcon from "./CategoryDropMenuIcon";
import apiClient from '../../../src/helpers/apiClient';
import './menu.css';


class CategoryDropMenu extends Component {
    constructor() {
        super();
        this.state = {
            categoriesList: []
        }
    }
    componentDidMount() {
        apiClient.getCategories()
            .then(({ data }) => {
                this.setState({
                    categoriesList: data
                })
            })
    }

    render() {
        return (
            <div className="category-menu-container">
                <div className="overlay"></div>
                {
                    this.state.categoriesList.slice(this.state.categoriesList.length - 5).reverse().map((category) => {
                        return <div className="category-menu-item" key={category._id}>
                                <div className="category-card">
                                    <div className="category-icon">
                                        <a href={`/categories/${category._id}`}><img src={`/icons/${category.icon}.png`} alt={category.icon} /></a>
                                    </div>
                                </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
export default CategoryDropMenu