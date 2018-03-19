import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class extends Component {
	render() {
		return (
			<div className="navigator">
				<Link to={`${this.props.match.url}`}><div className="nav-plantBase">星球基地</div></Link>
				<Link to={`${this.props.match.url}/myBase`}><div className="nav-myBase">我的基地</div></Link>
			</div>
		)
	}
}