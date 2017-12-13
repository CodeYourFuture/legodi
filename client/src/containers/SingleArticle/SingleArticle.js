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

  render() {
    return (
      <div className="Single-article">
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.fullContent}</p>
      </div>
    )
  }
}

export default SingleArticle