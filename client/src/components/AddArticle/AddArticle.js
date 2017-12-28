import React, { Component } from 'react';
import apiClient from '../../helpers/apiClient';
import './add-article.css';
class AddArticle extends Component {

    render() {
        return (
            <div className="add-article">
                <form>
                    <div className="container">
                        <label><strong>Title:</strong></label>
                        <input className="form-control form-control-sm" type="text" name="title" />
                        <label><strong>Picture:</strong></label>
                        <input class="form-control form-control-sm" type="text" name="articleImage"/>
                        <label><strong>Categories:</strong></label>
                        <select name="category" class="form-control form-control-sm">
                            <option value="null" selected>Choose a Category</option>
                            <option value="test">Test</option>
                        </select>
                        <label><strong>Language</strong></label>
                        <select name="language" class="form-control form-control-sm">
                            <option>Select language</option>
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                            <option value="am">Amharic</option>
                        </select>
                        <label><strong>Full Content:</strong></label>
                        <textarea rows="6" className="form-control form-control-sm" name="fullContent"></textarea>
                        <button class="btn-sm btn-success btn-lg" onClick={this.onClickChange} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddArticle;