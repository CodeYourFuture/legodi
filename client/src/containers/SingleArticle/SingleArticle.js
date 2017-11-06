import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient'

class SingleArticle extends Component {
  
  constructor() {

    super();
    this.state = {
      articles: []
    }
  }
  componentDidMount() {
    apiClient.getArticles()
      .then(({ data }) => {
        this.setState({
          articles: data
        })
      })
      .catch((err) => { })
  }

  render() {
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
      <div>
        {this.state.articles.map(article => {
          if (article._id === articleId) {
            return <div>
              <h5>{article.title}</h5>
              <p>{article.fullContent}</p>
            </div>
          }
        })}
      </div>
    )
  }
}

export default SingleArticle