import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import music from './../../images/event.png'


function ImageCard(props) {
  //<Link to={`/${props.resource}/${props.id}`}>Card Link</Link>
  return (
    <div>
 
      <Card style={{width:"10em", height:"10em" ,border: "none"}}>
       
        <CardImg top img width="200px" height="100px" src={music} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
   
  <Link to={`/${props.resource}/${props.id}`}>Card Link</Link>
        </CardBody>
        </Card>
  
    </div>
  );
};

export default ImageCard;