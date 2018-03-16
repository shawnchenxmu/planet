import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

export default class extends Component {
	render() {
		return (
			<div className="plant-base-wrapper">
				<div className="display-area">
					<div><FontAwesome name="diamond" />黑钻 0.001</div>
					<div><FontAwesome name="diamond" />原力值 32</div><div>星球秘籍</div>
					<button className="get-power">获取原力</button><button className="dimond-auction">黑钻竞拍</button>
				</div>
				<div className="rank-table">
					<h3>排行榜</h3>
					<table>
						<tbody>
						<tr>
							<th>名次</th>
							<th>普通黑钻</th>
							<th>幸运钻</th>
							<th>原力</th>
						</tr>
						<tr>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}