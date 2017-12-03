import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './CategoriesOverview/category.css'

class SingleCategory extends Component {

    constructor() {

        super();
        this.state = {
            articles: [],
            defaultData: "",
            categoryDescription: ""
        }
    }
    componentDidMount() {
        let language=localStorage.getItem("language")
        
        const { categoryId } = this.props.match.params;
        apiClient.getArticlesByCategoryId(categoryId,language)
            .then(({ data }) => {
                if (data.length ===0 ) {
                    this.setState({
                        defaultData: "This category does not have articles"
                    })
                } else {
                    this.setState({
                        articles: data,
                        categoryDescription: data
                    })
                }
            })
    }

    categoryData() {
        if (this.state.categoryDescription.length > 0) {
            return this.state.categoryDescription[0].category.description;
        }
    }

    render() {
        return (
            <div className="SingleCategory">
                <h1 className="category-header">Category Description:</h1>    
                <p className="category-description">{this.categoryData()}</p>
                {this.state.articles.map(article => {
                    return <div key={article._id} className="article-content">    
                        <div className="article-logo">    
                            <img src="/icons/default-icon.png" alt="default-icon" />
                        </div>
                        <div className="article-pragraph">
                            <p>{article.fullContent}</p>
                        </div>    
                    </div>
                })}
                <h1>{this.state.defaultData}</h1>
            </div>
        )
    }
}

export default SingleCategory