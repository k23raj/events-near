import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import myImage from './../../images/event.png'
import '../../styleSheet/List.css'
const SampleCard = (props) => {

 
  return (
      <Card style={{width:"16em", height:"20em" ,border: "none"}}>
      <CardBody>
      <Link to={`/${props.resource}/${props.id}`}>
        <CardImg top img width="200px" height="100px" src={myImage} alt="Card image cap" />
        </Link>
        <Link to={`/${props.resource}/${props.id}`}>
          <CardTitle >{props.name}</CardTitle>
          <CardText >{props.description} </CardText>
          <CardText >
            <small className="text-muted">{props.address}</small>
            </CardText>
          <CardText >Rs:{props.price}</CardText>
          </Link>
          </CardBody>
        </Card>
       
  );
};

export default SampleCard;