import React from 'react'
import {withRouter} from 'react-router-dom'
import {startRemoveUser} from '../../actions/user'
import {connect} from 'react-redux'
import _ from 'lodash'

function Logout(props) {
  {  /* if(!_.isEmpty(props.user)){
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
    }    */}
    props.dispatch(startRemoveUser())
      

     console.log('logout')   
    return (
        <div>
            {_.isEmpty(props.user) && (
                <div>
                <p>logged out succesfully</p>
                </div>
            )
            }
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(withRouter(Logout))