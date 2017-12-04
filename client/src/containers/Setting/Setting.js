import React, { Component } from 'react';

class Setting extends Component {

    updateLanguage = (e) => {
        var languageValue = e.target.value;
        this.setState({
        })
        localStorage.setItem('language', languageValue);
    }

    render() {
        var localLang = localStorage.getItem("language");
        return (
            <div className="row">
                <div className="col">    
                    <select onChange={this.updateLanguage} className="form-control">
                        <option value="null">Select Language</option>    
                        <option value="En">English</option>
                        <option value="Ar">Arabic</option>
                        <option value="Am">Amharnga</option>
                    </select>
                </div>
            </div>
        )
    }
}

export default Setting