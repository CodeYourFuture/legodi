import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Question extends React.Component {
  render() {
    return (
      <Form className="container">
        <FormGroup tag="fieldset" row>
          <legend className="col-form-legend col-sm-2">{this.props.title}</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                {this.props.choices.a}
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                {this.props.choices.b}
                </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio3" />{' '}
                {this.props.choices.c}
                </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio4" />{' '}
                {this.props.choices.d}
                </Label>
            </FormGroup>
          </Col>
          <Button color="primary">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}