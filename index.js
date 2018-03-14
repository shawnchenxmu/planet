import App from './src'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

ReactDOM.render((
	<Router>
		<App />
	</Router>
), document.getElementById("root"))