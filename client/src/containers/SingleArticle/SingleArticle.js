import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './single-article.css'

class SingleArticle extends Component {
  
  constructor() {

    super();
    this.state = {
      article: {}
    }
  }
  componentDidMount() {
    const { articleId } = this.props.match.params;
    apiClient.getSingleArticle(articleId)
      .then(({ data }) => {
        this.setState({
          article: data
        })
      })
  }
  showArticleImage() {
    const imageUrl = process.env.REACT_APP_API_URI || 'http://localhost:3001';
    if (this.state.article.articleImage) {
      return (<div className="writer-picutre">
        <img src={`${imageUrl}/images/${this.state.article.articleImage}`} alt={this.state.article.articleImage} />
      </div>)
    }
  }
  render() {
    return (
      <div className="Single-article">
        {this.showArticleImage()}
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.fullContent}</p>
      </div>
    )
  }
}

export default SingleArticle