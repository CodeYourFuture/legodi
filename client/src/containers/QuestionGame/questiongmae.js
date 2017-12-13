import React, { Component } from 'react';
 import Question from '../../components/Question/question'
 import QuestionsObject from '../../data/questions.json'
 import apiClient from '../../helpers/apiClient';
 const mydata = require("../../data/questions.json");
 
 class QuestionGames extends Component {
    constructor(){
        super();
        this.state = {
            questions: []
        }
    }
    componentDidMount(){
         apiClient.getWeegie()
         .then(({ data }) => {
            console.log(data)
         })
     let data=shuffle(mydata);
     
     function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
      
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
      
          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
      
          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
      
        return array;
      }


       this.setState({
        questions:data
      })
     }
    render() {
             
        return (
            <Question questions={this.state.questions}/>
        )
    }
}

export default QuestionGames;