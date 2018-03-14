import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class extends Component {
	render() {
		return (
			<div className="navigator">
				<div className="nav-plantBase"><Link to="/">星球基地</Link></div>
				<div className="nav-myBase"><Link to="/myBase">我的基地</Link></div>
			</div>
		)
	}
}