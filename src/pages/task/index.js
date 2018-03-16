import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

export default class extends Component {
	render() {
		return (
			<div className="task-page">
				<div className="task-page-header">
					<h2>赶紧收取原力，加速获取黑钻</h2>
					<p>原力越多，获取的黑钻会越多</p>
				</div>
				<div className="task-page-regular">
					<h2>定期任务</h2>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<div className="task-page-exclusive">
					<h2>独家任务</h2>
					<div></div>
					<div></div>
					<div></div>
				</div>
				<p>刷新页面，查看任务最新状态</p>
			</div>
		)
	}
}