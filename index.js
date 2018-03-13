import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PlantBase from './src/pages/plantBase'

import './style/main.scss'

class App extends Component {
	render() {
		return (
			<PlantBase />
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))