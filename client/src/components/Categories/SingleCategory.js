import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './CategoriesOverview/category.css'
import { Link } from 'react-router-dom';

const styles = ({
    defualtText: {
        textAlign: 'left'
    },
    arabicText: {
        textAlign: 'right'
    }
});

class SingleCategory extends Component {

    constructor() {

        super();
        this.state = {
            articles: [],
            defaultData: "",
            categoryTitle: '',
            categoryDesc: '',
            lang: ''
        }
    }
    componentDidMount() {
        let language = localStorage.getItem("language") || 'en';
        
        const { categoryId } = this.props.match.params;
        apiClient.getArticlesByCategoryId(categoryId,language)
            .then(({ data }) => {
                if (data.length === 0 ) {
                    this.setState({
                        defaultData: "This category does not have any articles"
                    })
                } else {
                    const { category = {} } = data[0];
                    if (language === 'ar') {
                         this.setState({
                             articles: data,
                             categoryTitle: category.titleTranslation[language],
                             categoryDesc: category.arabicDescription,
                             lang: data[0].language
                         })
                    } else if (language === 'am') {
                        this.setState({
                            articles: data,
                            categoryTitle: category.titleTranslation[language],
                            categoryDesc: category.amharngaDescription
                        })
                    } else {
                        this.setState({
                            articles: data,
                            categoryTitle: category.title,
                            categoryDesc: category.description
                        })
                    }
                }
            })
    }

    render() {
       
        
        return (
            <div className="container" style={this.state.lang === 'ar'  ? styles.arabicText : styles.defualtText}>
            <div className="single-category">
                    <h1 className="category-header">{this.state.categoryTitle}</h1> 
                <p className="category-description">{this.state.categoryDesc}</p>
                {this.state.articles.map(article => {
                     const articleLink="/articles/"+article._id;
                        return <Link to={articleLink} key={article._id}> 
                        <div  className="article-content" style={article.language === 'ar' ? styles.arabicText : styles.defualtText}>  
                       
                        <div className="article-logo">    
                       
                        <img src="/icons/default-icon.png" alt="default-icon" />
                      
                        </div>
                         
                        <div className="article-pragraph">
                            <h1>{article.title}</h1>
                             <p>{article.fullContent && article.fullContent.substring(0, 80)}...</p>
                        </div>    
                    </div>
                    </Link>
                })}
                <h1>{this.state.defaultData}</h1>
                
            </div>
           </div>
        )
    }
}

export default SingleCategory