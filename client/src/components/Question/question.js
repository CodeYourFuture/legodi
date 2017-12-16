import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import apiClient from '../../helpers/apiClient';

let answerValue = "";

export default class Question extends React.Component {

  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      selectedOption: 'a',
      rightanswer: 0,
      wronganswer: 0,
      userAnswers:[],
      gameQuestion:[],
      correct:0,
      wrong:0,
      wrongAnswersList:[]
    }
  }

  componentDidMount(){
    apiClient.getWeegie()
    .then(({ data }) => {
       this.setState({
        gameQuestion:data
       })
    })}

  changeQuestion = (e) => {
    
    this.state.userAnswers.push({title:this.state.gameQuestion[this.state.questionNumber]._id,answer:this.state.selectedOption})
    const questionNumber=this.state.questionNumber

    if(questionNumber === 9){
       apiClient.postWeegie(this.state.userAnswers)
       .then((response)=>{
         console.log(response.data)
         this.setState({
          rightanswer:response.data.correctAnswers,
          wronganswer:response.data.wrongAnswers,
          wrongAnswersList:response.data.wrongAnswersList
          
         });
       })
        
      
    } 
      
    if (answerValue === this.state.selectedOption) {
      this.setState({
        correct: this.state.correct + 1
      })
    } else {
      this.setState({
        wrong: this.state.wrong + 1
      })
    }
    this.setState({
      questionNumber: this.state.questionNumber + 1,
      selectedOption: "a"
    })

    
  }

  changeSelectOption = (e) => {
    this.setState({
      selectedOption: e.target.value
    })

  }

  render(props) {
    let questionTitle = "", chooiseOne = "", chooiseTwo = "", chooiseThree = "", chooiseFour = "";
    let question=this.state.gameQuestion; 
    
    if ( question[0]) {
      questionTitle =question[this.state.questionNumber].title;
      chooiseOne = question[this.state.questionNumber].choices.a;
      chooiseTwo =question[this.state.questionNumber].choices.b;
      chooiseThree =question[this.state.questionNumber].choices.c;
      chooiseFour = question[this.state.questionNumber].choices.d;
      answerValue = question[this.state.questionNumber].answer

    }

    if (this.state.questionNumber < 10) {
       return (

        <Form className="container" >
          <h3 class="text-success"> Correct:<span class="text-danger">{this.state.correct}</span>  <span class="text-info">|</span> Wrong:<span class="text-danger">{this.state.wrong}</span></h3>
          <h2 className=" text-primary">Question <span class="text-danger">{this.state.questionNumber + 1}</span></h2>
          <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-4 text-primary"><h3>Calculate :<span class="text-danger">{questionTitle}</span></h3></legend>
            <Col sm={10}>
              <FormGroup  >
                <Label check>
                  <Input checked={this.state.selectedOption === 'a'} onChange={this.changeSelectOption} type="radio" value="a" name="radio1" />{' '}
                  {chooiseOne}
                </Label>
              </FormGroup>
              <FormGroup  >
                <Label check>
                  <Input checked={this.state.selectedOption === 'b'} onChange={this.changeSelectOption} type="radio" value="b" name="radio1" />{' '}
                  {chooiseTwo}
                </Label>
              </FormGroup>
              <FormGroup  >
                <Label check>
                  <Input checked={this.state.selectedOption === 'c'} onChange={this.changeSelectOption} type="radio" value="c" name="radio1" />{' '}
                  {chooiseThree}
                </Label>
              </FormGroup>
              <FormGroup  >
                <Label check>
                  <Input checked={this.state.selectedOption === 'd'} onChange={this.changeSelectOption} type="radio" value="d" name="radio1" />{' '}
                  {chooiseFour}
                </Label>
              </FormGroup>
              <Button onClick={this.changeQuestion} className="btn btn-lg"> submit</Button>
      
            </Col>

          </FormGroup>

        </Form>
      );
    } else {      
       return (
        <div class="container">
          <h3 class="text-center text-success">True answers:{this.state.rightanswer}</h3>
          <h3 class="text-center text-success">Wrong answers:{this.state.wronganswer}</h3>
          { this.state.wrongAnswersList.map((question,i)=>{
            return (
              <ul class="pb-5" key={question._id}>
               <h2>correction {i+1}:</h2> 
            <li >Question: {question.title}</li>
            
            <li>a:{question.choices.a}</li>
           
            <li>b:{question.choices.b}</li>
            
            <li>c:{question.choices.c}</li>
            
            <li>d;{question.choices.d}</li>

            <h3 class="text-danger">Answer: {question.answer} </h3>


            </ul>
          )
          })}
        </div>
      );
    }
  }

}