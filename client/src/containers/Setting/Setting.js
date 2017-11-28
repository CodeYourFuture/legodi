import React, { Component } from 'react';

class Setting extends Component {

    constructor() {
        super();
        this.state = {
            catLanguage:'En'
        }
    }
    
    updateLanguage=(e)=>{
        var languageValue = e.target.value;
         this.setState({
            catLanguage:languageValue
        })
        localStorage.setItem('language',languageValue);                
    }

    render() {
        var localLang = localStorage.getItem("language");
        return (
            <div>
                <h1>{localLang}</h1>
                <button value="En" onClick={this.updateLanguage}> En</button>
                <button value="Ar" onClick={this.updateLanguage}>Ar</button>
                <button value="Am" onClick={this.updateLanguage}>Am</button>
            </div>
        )
    }
}

export default Setting