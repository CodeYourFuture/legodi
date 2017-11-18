import React from 'react';
import { Card, CardText, CardBody,CardTitle, Button, CardImg, style } from 'reactstrap';


function CategoryCard(props){ 
 return (
        <div>
          <Card>
            <CardBody>
              <CardImg img={{uri: 'asset:/app_icon.png'}} style={{width: 40, height: 40}}></CardImg>
              <CardTitle style={{color:'#0f352e'}} >Title: {props.category.title} </CardTitle>
              <CardText>Description:{props.category.shortDescription}</CardText>
              <Button onClick={() => props.history.push(props.href)}>view category</Button>
            </CardBody>
          </Card>
        </div>
      );
  }
 
export default CategoryCard
 