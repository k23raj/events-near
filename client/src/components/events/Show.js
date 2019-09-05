import React from 'react'
import _ from 'lodash'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import '../../styleSheet/List.css'
import myImage from './../../images/Udit-Narayan-500x500.jpg'
function EventShowCard(props) {


    return (
        <div>
            
            {!_.isEmpty(props.event) && (
                <div>
                    <Row >
                        <Col sm={{ size: 4, offset: 2 }}>
                            <Card body style={{ padding: 0, sizes: "256x256" }}>
                                <CardImg bottom width="100%" src={myImage} height="auto" />
                            </Card>
                        </Col>
                        <Col sm={{ size: 4 }}>
                            <Card body>

                                <CardTitle>{props.event.name}</CardTitle>
                                <CardTitle>{props.event.user.name}</CardTitle>
                                <CardText>{props.event.description}</CardText>
                                <CardText> start Date:{props.event.date.startDate}
                                    End Date:{props.event.date.endDate}</CardText>
                                <CardText>{props.event.date.endDate}</CardText>
                                <CardText>{props.event.location.address},
                                    {props.event.location.city.name}</CardText>
                                <Button >Book Tickets</Button>
                            </Card>
                        </Col>
                    </Row>
                </div>)
            }

        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        user: state.user,
        event: state.events.find(event => event._id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(EventShowCard)