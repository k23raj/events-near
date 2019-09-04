import React from 'react'
import _ from 'lodash'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'
import { Link } from 'react-router-dom'
import myImage from './../../images/event.png'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap';
import '../../styleSheet/List.css'
function EventShowCard(props) {

    return (
        <div>

            {!_.isEmpty(props.event) && (
                <div>
                    <Row>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardImg bottom width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            </Card>
                        </Col>
                        <Col sm="6">
                            <Card body>
                                <CardTitle>Special Title Treatment</CardTitle>
                                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                                <Button>Go somewhere</Button>
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
        event: state.events.find(event => event._id == props.match.params.id)
    }
}
export default connect(mapStateToProps)(EventShowCard)