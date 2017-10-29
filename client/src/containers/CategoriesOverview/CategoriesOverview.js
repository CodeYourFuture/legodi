import React, { Component } from 'react';
import CategoryCard from "../../components/CategoryCard"
import apiClient from '../../helpers/apiClient'

class CategoriesOverview extends Component {
   
    // componentDidMount = () => {
    //     const albumsUrl = "https://gist.githubusercontent.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json";
    //     const url="http://eribognal-server.herokuapp.com/api/questions";
    //     fetch(url).then(response => response.json())
    //       .then(data => {
    //         console.log(data[0].title);            
    //     })}
         
        componentDidMount() {
            apiClient.getArticles()
                .then(({ data }) => {
                   console.log(data)
                })
                .catch((err) => { })    
        }

    render() {
      return (
                <div>
                        <CategoryCard  title="khaled"  fullContent="hello khaled"/>
                </div>
            )
    
    }}

export default CategoriesOverview