import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './CategoriesOverview/category.css'
import { Link } from 'react-router-dom';


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
                        articleUrl:"my",
                        category
                    })
                }
            })
    }

    render() {
       
        
        return (
            
            <div className="single-category">
                <h1 className="category-header">{this.state.category.title}</h1> 
               
   
                <p className="category-description">{this.state.category.description}</p>
                {this.state.articles.map(article => {
                     let articleLink="/article/"+article._id;
                    return <Link to={articleLink}> 
                    <div key={article._id} className="article-content">  
                       
                        <div className="article-logo">    
                       
                        <img src="/icons/default-icon.png" alt="default-icon" />
                      
                        </div>
                         
                        <div className="article-pragraph">
                             <p>{article.fullContent}</p>
                     
                        </div>    
                    </div>
                    </Link>
                })}
                <h1>{this.state.defaultData}</h1>
                
            </div>
           
        )
    }
}

export default SingleCategory