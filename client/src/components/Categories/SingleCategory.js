import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient'

class SingleCategory extends Component {

    constructor() {

        super();
        this.state = {
            articles: [],
            defaultData: ""
        }
    }
    componentDidMount() {
        const { categoryId } = this.props.match.params;
        apiClient.getArticlesByCategoryId(categoryId)
            .then(({ data }) => {
                if (data.length ===0 ) {
                    this.setState({
                        defaultData: "This category does not have articles"
                    })
                } else {
                    this.setState({
                        articles: data
                    })
                }
            })
    }

    render() {
        return (
            <div className="SingleCategory">
                {this.state.articles.map(article => {
                    return <div key={article._id}>
                        <h4>{article.title}</h4>
                        <a className="btn btn-info btn-sm" href={`/articles/${article._id}`}>More Info</a>
                    </div>
                })}
                <h1>{this.state.defaultData}</h1>
            </div>
        )
    }
}

export default SingleCategory