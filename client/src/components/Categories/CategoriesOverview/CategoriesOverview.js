import React, { Component } from 'react';
import CategoryCard from "../CategoryCard";
import apiClient from '../../../helpers/apiClient';
import './category.css';

class CategoriesOverview extends Component {
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
            <div className="category-container">
                {
                    this.state.categoriesList.map((category) => {
                        return (
                            <div className="category-item" key={category._id}>
                                <CategoryCard alt={category.icon} src={`/fwddesignhelp/${category.icon}.png`} href={`/categories/${category._id}`} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default CategoriesOverview