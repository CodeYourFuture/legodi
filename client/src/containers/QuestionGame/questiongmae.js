import React, { Component } from 'react';
 import Question from '../../components/Question/question'
 import QuestionsObject from '../../data/questions.json'
 import apiClient from '../../helpers/apiClient';
 const mydata = require("../../data/questions.json");
 
 class QuestionGames extends Component {
   
    render() {
             
        return (
            <Question />
        )
    }
}

export default QuestionGames;