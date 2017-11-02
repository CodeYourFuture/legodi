import React, { Component } from 'react';

class SingleArticle extends Component {
  render() {
    const { articleId } = this.props.match.params;
    return (
      <div className="SingleArticle">
          SingleArticle {articleId}
      </div>
    )
  }
}

export default SingleArticle