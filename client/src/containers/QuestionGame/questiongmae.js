import React, { Component } from 'react';
 import Question from '../../components/Question/question'
 import QuestionsObject from '../../data/questions.json'
 var mydata = require("../../data/questions.json");
class QuestionGames extends Component {
    constructor(){
        super();
        this.state = {
            questions: []
        }
    }
    componentDidMount(){
         
     let data=   mydata;
     
       this.setState({
        questions:data
      })
     }
    render() {
             
        return (
           
                    <div >
                        {this.state.questions.map((question,i)=>{
                            console.log(question.choices[0].a);
                  return   <Question key={i} title={question.title} choices={question.choices[0]} answer={question.answer}/>
                        })}
                       
                       
                    </div>
        )
    }
}

export default QuestionGames;