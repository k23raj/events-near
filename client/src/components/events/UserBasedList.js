import React from 'react'
import {connect} from 'react-redux'
import { startSetCategory } from '../../actions/category';
import _ from 'lodash'
import { startSetEvent } from '../../actions/event'
import { Link } from 'react-router-dom'
import EventCard from '../common/EventCard'
import CategoriesList from '../categories/List'
import { Container, Row, Col } from 'reactstrap';
import '../../styleSheet/List.css'
class ListEventsBasedCategory extends React.Component{
   
    
    render(){
    return(
        <div>
            <Container sm={{ size: 6, order: 2, offset: 1 }}>
                <Row >
                <Col  >
                <CategoriesList/>
               </Col>
               </Row>
                
                <h3>Events</h3>
              
            {_.isEmpty(this.props.events) ? (<p>Loading</p>) :
                (<div className="eventsList">
                            {this.props.events.map(event => <EventCard name={event.name} id={event._id} resource="events" address={event.location.address} price={event.seatDetails.tktPrice} />)}
                            
                 </div>)}
              
                </Container>
                </div>
            )}
}
const mapStateToProps = (state,props) => {
    return {
        events: state.user.filter(event=>event.category._id==props.match.params.id)
    }
}

export default connect(mapStateToProps)(ListEventsBasedCategory)