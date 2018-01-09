import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import apiClient from '../../helpers/apiClient';
import Spinner from '../Spinner/Spinner';
import './question.css'
let answerValue = "";

export default class Question extends React.Component {

  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      selectedOption: 'a',
      rightanswer: 0,
      wronganswer: 0,
      userAnswers: [],
      gameQuestion: [],
      correct: 0,
      wrong: 0,
      wrongAnswersList: []
    }
  }

  componentDidMount() {
    apiClient.getWeegie()
      .then(({ data }) => {
        this.setState({
          gameQuestion: data
        })
      })
  }

  changeQuestion = (e) => {

    this.state.userAnswers.push({ title: this.state.gameQuestion[this.state.questionNumber]._id, answer: this.state.selectedOption })
    const questionNumber = this.state.questionNumber

    if (questionNumber === 9) {
      apiClient.postWeegie(this.state.userAnswers)
        .then((response) => {
          this.setState({
            rightanswer: response.data.correctAnswers,
            wronganswer: response.data.wrongAnswers,
            wrongAnswersList: response.data.wrongAnswersList

          });
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
    let question = this.state.gameQuestion;

    if (question[0]) {
      questionTitle = question[this.state.questionNumber].title;
      chooiseOne = question[this.state.questionNumber].choices.a;
      chooiseTwo = question[this.state.questionNumber].choices.b;
      chooiseThree = question[this.state.questionNumber].choices.c;
      chooiseFour = question[this.state.questionNumber].choices.d;
      answerValue = question[this.state.questionNumber].answer

    }
    if (this.state.gameQuestion.length === 0) {
      return <Spinner />
    } else if (this.state.questionNumber < 10) {
      return (

        <Form className="container" >
          <FormGroup tag="fieldset" row>
            <legend className="col-form-legend col-sm-12 "><h3>{this.state.questionNumber + 1} - <span className="question-title">{questionTitle}</span></h3></legend>
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


              <Button onClick={this.changeQuestion} className="btn btn-lg bg-weegie float-right">{this.state.questionNumber === 9 ? "Submit" : "Next"}</Button>


            </Col>

          </FormGroup>

        </Form>
      );
    } else {
      return (
        <div className="weegie-result">
          <h1 className="text-center "> Correct &#x2714;:{this.state.rightanswer}</h1>
          <h1 className="text-center ">Wrong &#x2716;:{this.state.wronganswer}</h1>
          {this.state.wrongAnswersList.map((question, i) => {
            return (
              <div className="container" key={question._id}>
                <h2> {question.title}</h2>
                <ul className="answer-list">
                  <li>a:{question.choices.a}</li>
                  <li>b:{question.choices.b}</li>
                  <li>c:{question.choices.c}</li>
                  <li>d;{question.choices.d}</li>
                  <h3><span className="question-answer">Answer</span>: {question.answer} </h3>
                </ul>
              </div>
            )
          })}
        </div>
      );
    }
  }

}