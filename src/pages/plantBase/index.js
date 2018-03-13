import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

export default class extends Component {
	render() {
		return (
			<div className="plant-base-wrapper">
				<div className="display-area">
					<span>黑钻 0.001</span><span>原力值 32</span><span>星球秘籍</span>
					<button className="get-power">获取原力</button><button className="dimond-auction">黑钻竞拍</button>
				</div>
				<div className="rank-table">
					<h3>排行榜</h3>
				</div>
			</div>
		)
	}
}