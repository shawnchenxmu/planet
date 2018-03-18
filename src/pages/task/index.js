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
				<div className="task-container task-page-regular">
					<h2>定期任务</h2>
					<div>邀请 5 名好友</div>
					<div>每日登录</div>
					<div></div>
				</div>
				<div className="task-container task-page-exclusive">
					<h2>独家任务</h2>
					<div>网易云课堂</div>
					<div>极客战记</div>
					<div>网易云音乐</div>
					<div>网易严选</div>
					<div>网易云阅读</div>
					<div>敬请期待……</div>
				</div>
				<p className="task-page-bottom">刷新页面，查看任务最新状态</p>
			</div>
		)
	}
}