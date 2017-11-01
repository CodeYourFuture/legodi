import React from 'react';
import { Card, CardText, CardBody,CardTitle, Button } from 'reactstrap';
function CategoryCard(props){ 
if(props.category.hideCategory!="on"){
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
   }else{
     return(<div></div>)
   }
  }
 
export default CategoryCard
 