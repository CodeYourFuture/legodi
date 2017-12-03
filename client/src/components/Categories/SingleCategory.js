import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './CategoriesOverview/category.css'

class SingleCategory extends Component {

    constructor() {

        super();
        this.state = {
            articles: [],
            defaultData: "",
            category: {}
        }
    }
    componentDidMount() {
        let language=localStorage.getItem("language")
        
        const { categoryId } = this.props.match.params;
        apiClient.getArticlesByCategoryId(categoryId,language)
            .then(({ data }) => {
                if (data.length ===0 ) {
                    this.setState({
                        defaultData: "This category does not have any articles"
                    })
                } else {
                    const { category = {} } = data[0];
                    this.setState({
                        articles: data,
                        category
                    })
                }
            })
    }

    render() {
        return (
            <div className="SingleCategory">
                <h1 className="category-header">{this.state.category.title}</h1>    
                <p className="category-description">{this.state.category.description}</p>
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