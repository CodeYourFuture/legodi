import React, { Component } from 'react';
import CategoryItem from "../../components/categoryItem";
import apiClient from '../../apiAxios/apiClient';
import { Nav, NavItem, NavLink } from 'reactstrap';

class CategoriesNavOverview extends Component {

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
            .catch((err) => { })



    }

    render() {
        return (
            <Nav pills>
                
                {
                    this.state.categoriesListArr.map((category) => {
                        return (
                           <NavLink> <CategoryItem categoryItem={category} /></NavLink>
                        )
                    })
                }


            </Nav>

        )

    }
}

export default CategoriesNavOverview