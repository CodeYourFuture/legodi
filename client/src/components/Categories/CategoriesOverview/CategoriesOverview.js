import React, { Component } from 'react';
import CategoryCard from "../CategoryCard";
import apiClient from '../../../helpers/apiClient';

class CategoriesOverview extends Component {
    constructor() {
        super();
        this.state = {
            categoriesListArr: []
        }
    }
    componentDidMount() {
        apiClient.getCategories()
            .then(({ data }) => {
                this.setState({
                    categoriesListArr: data
                })
            })
    }
    render() {
        return (
            <div>
                {
                    this.state.categoriesListArr.map((category) => {
                        return (
                            <CategoryCard category={category} />
                        )
                    })
                }
            </div>
        )
    }
}
export default CategoriesOverview