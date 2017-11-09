import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';

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
      <div className="SingleArticle">
        <h1>Title:{this.state.article.title}</h1>
        <h3>Description:{this.state.article.fullContent}</h3>
      </div>
    )
  }
}

export default SingleArticle