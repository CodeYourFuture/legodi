import React from 'react';
import { Card, CardText, CardBody,CardTitle, Button } from 'reactstrap';
function CategoryCard(props){ 
 return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>Title: {props.category.title}</CardTitle>
              <CardText>Description:{props.category.shortDescription}</CardText>
  
              <Button href={props.href}>view category</Button>
            </CardBody>
          </Card>
        </div>
      );
  }
 
export default CategoryCard
 