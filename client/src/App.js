import React from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Register from './components/user/Register'
import Login from './components/user/Login'
import _ from 'lodash'
import NavBar from './components/common/NavBar'
import Account from './components/user/Account'
import Logout from './components/user/Logout';
//import './App.css'
import EventShow from './components/events/Show'
import EventsList from './components/events/List'
import EventsByCategory from './components/events/CategoryBasedList'
import EventsByUser from './components/events/UserBasedList'
import CategoriesList from './components/categories/List'
function App(props) {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<Switch>
					<Route path="/register" component={Register} exact={true} />
					<Route path="/" component={EventsList} exact={true} />
					<Route path="/login" component={Login} exact={true} />
					<Route path="/account" component={Account} exact={true} />
					<Route path="/logout" component={Logout} exact={true} />
					<Route path="/events/:id" component={EventShow} exact={true} />
					<Route path="/categories/:id" component={EventsByCategory} exact={true} />
					<Route path="/regEvents" component={EventsByUser} exact={true} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}
const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export default connect(mapStateToProps)(App);
