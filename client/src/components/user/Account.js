import React from 'react'
import {connect} from 'react-redux'
import {Redirect} from "react-router-dom"
 function Account(props){
         return(
             <div>
                 {props.user ? (<div>
                     <p>id:{props.user._id}</p>
                     <p>username:{props.user.username}</p>
                     <p>email:{props.user.email}</p>
                 </div>
                 ) : (
                         <Redirect to="/login" />
                     )}
             </div>
         )
    
 }

 const mapStateToProps = (state) => {
     return {
         user: state.user
     }
 }
 export default connect(mapStateToProps)(Account)