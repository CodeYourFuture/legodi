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
        apiClient.getArticles()
            .then(({ data }) => {
                this.setState({
                    articles: data
                })
            })
            .catch((err) => { })
    }

    render() {
        const { categoryId } = this.props.match.params;
        return (
            <div className="SingleCategory">
                {this.state.articles.map(article => {
                    if (article.category === categoryId) {
                        return <div className="card">
                            <div className="card-block">
                                <h4 className="card-title">{article.title}</h4>
                                <a className="btn btn-info btn-sm" href={"/articles/" + article._id + " "}>More Info</a>
                            </div>
                        </div>
                    }
                })}
            </div>
        )
    }
}

export default SingleCategory