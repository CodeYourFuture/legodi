import React, { Component } from 'react';
import CategoryItem from "../categoryItem";
import apiClient from '../../../helpers/apiClient';
import { Nav } from 'reactstrap';

class CategoriesNavOverview extends Component {
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
            <Nav pills>
                {
                    this.state.categoriesList.map((category) => {
                        return (
                            <CategoryItem categoryItem={category} />
                        )
                    })
                }
            </Nav>
        )
    }
}

export default CategoriesNavOverview