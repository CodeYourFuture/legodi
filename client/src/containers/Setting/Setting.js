import React, { Component } from 'react';
import './setting.css'
class Setting extends Component {

    updateLanguage = (e) => {
        var languageValue = e.target.value;
        this.setState({
        })
        localStorage.setItem('language', languageValue);
    }

    render() {
        return (
            <div className="row select-language">
                <div className="col">    
                    <select onChange={this.updateLanguage} className="form-control">
                        <option value="null">Select Language</option>    
                        <option value="en">English</option>
                        <option value="ar">Arabic</option>
                        <option value="am">Amharnga</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Setting