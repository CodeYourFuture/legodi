import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
let answerValue = "";

export default class Question extends React.Component {

  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      selectedOption: 'a',
      rightanswer: 0,
      wronganswer: 0
    }
  }

  changeQuestion = (e) => {

    if (answerValue === this.state.selectedOption) {
      this.setState({
        rightanswer: this.state.rightanswer + 1
      })
    } else {
      this.setState({
        wronganswer: this.state.wronganswer + 1
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

    if (this.props.questions[this.state.questionNumber]) {

      questionTitle = this.props.questions[this.state.questionNumber].title;
      chooiseOne = this.props.questions[this.state.questionNumber].choices[0].a;
      chooiseTwo = this.props.questions[this.state.questionNumber].choices[0].b;
      chooiseThree = this.props.questions[this.state.questionNumber].choices[0].c;
      chooiseFour = this.props.questions[this.state.questionNumber].choices[0].d;
      answerValue = this.props.questions[this.state.questionNumber].answer

    }

    if (this.state.questionNumber < 10) {
      return (

        <Form className="container" >
          <h3 class="text-success"> Correct:<span class="text-danger">{this.state.rightanswer}</span>  <span class="text-info">|</span> Wrong:<span class="text-danger">{this.state.wronganswer}</span></h3>

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
        </div>
      );

    }



  }

}