import React, { Component } from 'react';
import CategoryCard from "../CategoryCard";
import apiClient from '../../../helpers/apiClient';

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
            <div>
                {
                    this.state.categoriesList.map((category) => {
                        return (
                            <CategoryCard category={category} href={`/categories/${category._id}`}/>
                        )
                    })
                }
            </div>
        )
    }
}
export default CategoriesOverview