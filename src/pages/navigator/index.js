import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class extends Component {
	render() {
		return (
			<div className="navigator">
				<div className="nav-plantBase"><Link to={`${this.props.match.url}`}>星球基地</Link></div>
				<div className="nav-myBase"><Link to={`${this.props.match.url}/myBase`}>我的基地</Link></div>
			</div>
		)
	}
}