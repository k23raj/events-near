import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import EventCard from '../common/EventCard'
import CategoriesList from '../categories/List'
import { Container, Row, Col } from 'reactstrap';
import '../../styleSheet/List.css'
class ListEvents extends React.Component {


    render() {
        return (
            <div>
                <Container sm={{ size: 6, order: 2, offset: 1 }}>
                    <Row >
                        <Col  >
                            <CategoriesList />
                        </Col>
                    </Row>

                    <h3>Events</h3>

                    {_.isEmpty(this.props.events) ? (<p>Loading</p>) :
                        (<div className="eventsList">
                            {this.props.events.map(event => <EventCard key={event._id} name={event.name} id={event._id} resource="events" address={event.location.address} price={event.seatDetails.tktPrice} />)}

                        </div>)}

                </Container>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        events: state.events
    }
}

export default connect(mapStateToProps)(ListEvents)