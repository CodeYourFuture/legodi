import React from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, CardSubtitle, Button } from 'reactstrap';
function CategoryCard(props){       
return (
        <div>
          <Card>
            <CardBody>
              <CardTitle>Title: {props.category.title}</CardTitle>
              <CardText>Description:{props.category.shortDescription}</CardText>
  
              <Button>view category</Button>
            </CardBody>
          </Card>
        </div>
      );
   }
 
export default CategoryCard
 