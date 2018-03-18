import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PlantBase from './pages/plantBase'
import MyBase from './pages/myBase'
import Navigator from './pages/navigator'
import Login from './pages/login'
import Task from './pages/task'

import '../style/main.scss'

const Base = ({ match }) => (
	<div>
		<Route exact path={`${match.url}/`} component={PlantBase} />
		<Route path={`${match.url}/myBase`} component={MyBase} />
		<Navigator match={match} />
	</div>
)

export default class extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={Login} />
				<Route path="/base" component={Base} />
				<Route path="/task" component={Task} />
			</div>
		)
	}
}