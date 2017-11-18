import React from 'react';
import { CardLink, Row, Card, CardText, CardBody, CardTitle, Button, CardImg, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './CategoryCard.css';

function CategoryCard(props) {
  return (
    <div>
      <Card>
        <CardBody>
          <Row>
            <Col sm="2">
              <CardImg img={{ uri: 'asset:/app_icon.png' }} style={{ width: 200, height: 200 }}></CardImg>
            </Col>
            <Col sm="2">
              <Link className="category-link" to={props.href}>
                <CardLink>
                  <CardTitle style={{ color: '#0f352e' }} > {props.category.title} </CardTitle>
                  <CardText>{props.category.shortDescription}</CardText>
                </CardLink>
              </Link>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
}

export default CategoryCard
