import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './single-article.css'

const styles = ({
  defualtText: {
    textAlign: 'left'
  },
  arabicText: {
    textAlign: 'right'
  }
});

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
        <img src={`${imageUrl}/images/${this.state.article._id}.png`} alt={this.state.article.articleImage} />
      </div>)
    }
  }
  render() {
    return (
      <div className="Single-article" style={this.state.article.language === 'ar' ? styles.arabicText : styles.defualtText}>
        {this.showArticleImage()}
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.fullContent}</p>
      </div>
    )
  }
}

export default SingleArticle