import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Question extends React.Component {
  render() {
    return (
      <Form className="container">
        <FormGroup tag="fieldset" row>
          <legend className="col-form-legend col-sm-2">Questin number:</legend>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Option one is this and that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio3" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio4" />{' '}
                Option two can be something else and selecting it will deselect option one
              </Label>
            </FormGroup>
          </Col>
          <Button color="primary">Submit</Button>
        </FormGroup>
      </Form>
    );
  }
}