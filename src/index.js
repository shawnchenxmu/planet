import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PlantBase from './pages/plantBase'
import MyBase from './pages/myBase'
import Navigator from './pages/navigator'

import '../style/main.scss'

export default class extends Component {
	render() {
		return (
			<div>
				<Route exact path="/" component={PlantBase} />
				<Route path="/myBase" component={MyBase} />
				<Navigator />
			</div>
		)
	}
}