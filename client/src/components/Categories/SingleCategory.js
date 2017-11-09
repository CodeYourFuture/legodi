import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient'

class SingleCategory extends Component {

    constructor() {

        super();
        this.state = {
            articles: []
        }
    }
    componentDidMount() {
        const { categoryId } = this.props.match.params;
        apiClient.getArticlesByCategoryId(categoryId)
            .then(({ data }) => {
                this.setState({
                    articles: data
                })
            })
    }

    render() {
        return (
            <div className="SingleCategory">
                {this.state.articles.map(article => {
                    return <div>
                        <h4>{article.title}</h4>
                        <a className="btn btn-info btn-sm" href={`/articles/${article._id}`}>More Info</a>
                    </div>
                })}
            </div>
        )
    }
}

export default SingleCategory