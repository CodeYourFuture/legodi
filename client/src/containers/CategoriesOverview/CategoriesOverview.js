import React, { Component } from 'react';
import CategoryCard from "../../components/CategoryCard"
import apiClient from '../../helpers/apiClient'
 

class CategoriesOverview extends Component {
 
    constructor(){

            super();
            this.state={
                categoriesListArr:[]
            }
        }
         
        componentDidMount() {
            apiClient.getCategories()
                .then(({ data }) => {
                     this.setState({
                        categoriesListArr:data
                    })
                })
                .catch((err) => { })    
        }

    render() {
      return (
                <div>
    {
                    this.state.categoriesListArr.map((category) => {
                        return (
                            <CategoryCard  title="khaled"  category={category} fullContent="hello khaled"/>
                            
                        )
                    })
                }
                 </div>
            )
    
    }}

export default CategoriesOverview