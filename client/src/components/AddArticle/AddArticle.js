import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './add-article.css';
import Spinner from '../Spinner/Spinner'
class AddArticle extends Component {
    constructor(props) {
        super();
        this.state = {
            title: "",
            status: "Pending",
            articleImage: "",
            order: null,
            category: [],
            language: "",
            fullContent: "",
            error: undefined,
            isLoading: false,
        };
    }

    componentDidMount() {
        apiClient.getCategories()
            .then(({ data }) => {
                this.setState({
                    category: data
                })
            })
    }

    _handleSubmit = (event) => {
        const article = {
            title: this.state.title,
            status: this.state.status,
            articleImage: this.state.articleImage,
            order: this.state.order,
            category: this.state.selectCategory,
            language: this.state.language,
            fullContent: this.state.fullContent
        }
        console.log(article)
        event.preventDefault();
        this.setState({
            isLoading: true
        })
        apiClient.postArticle(article, this.state.file)
            .then((response) => {
                setTimeout(() => { this.setState({ isLoading: false }) }, 2000)
                this.setState({
                    title: "",
                    file: null,
                    articleImage: "",
                    category: "",
                    language: "",
                    fullContent: "",
                    error: undefined,
                })
                this.props.history.push("/")
            }
            )
            .catch((errorMessage) => {
                this.setState({
                    error: errorMessage
                })
            })
    }

    _handleChange = (event, field) => {
        const value = event.target.value;
        this.setState({
            [field]: value
        })
    }

    onFileChange = (e) => {
        console.log()
        this.setState({
            file: e.target.files[0],
            articleImage: e.target.files[0].name
        })
    }

    showError = () => {
        if (this.state.error !== undefined) {
            return (
                <div>
                    <h3>Error</h3>
                    <p>
                        error.message
					 </p>
                </div>
            )
        }
    }

    render() {
        if (this.state.isLoading) {
            return <Spinner />
        } else {
            return (
                <div className="add-article">
                    {this.showError}
                    <form>
                        <div className="container">
                            <h1 className="article-header">Add article</h1>    
                            <input value={this.state.title} onChange={(event) => this._handleChange(event, "title")} placeholder="Title" className="form-control" type="text" name="title" />
                            <input onChange={this.onFileChange} className="form-control" type="file" name="articleImage" />
                            <input value={this.state.order} onChange={(event) => this._handleChange(event, "order")} placeholder="Order" className="form-control" type="number" name="order" />
                            <select value={this.state.selectCategory} onChange={(event) => this._handleChange(event, "selectCategory")} name="category" className="form-control">
                                <option value="null" >Choose a Category</option>
                                {
                                    this.state.category.map((categoryData) => {
                                        return (
                                            <option key={categoryData._id} value={categoryData._id}>{categoryData.title}</option>   
                                        )
                                    })
                                }
                            </select>
                            <select value={this.state.language} onChange={(event) => this._handleChange(event, "language")} name="language" className="form-control">
                                <option value="Select language">Select language</option>
                                <option value="en">English</option>
                                <option value="ar">Arabic</option>
                                <option value="am">Amharic</option>
                            </select>
                            <textarea value={this.state.fullContent} placeholder="Add your content" onChange={(event) => this._handleChange(event, "fullContent")} rows="4" className="form-control" name="fullContent"></textarea>
                            <button className="btn-sm btn-success btn-lg" onClick={this._handleSubmit} type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default AddArticle;