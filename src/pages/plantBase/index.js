import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'

export default class extends Component {
	render() {
		return (
			<div className="plant-base-wrapper">
				<div className="display-area">
					<div className="display-diamond"><FontAwesome name="diamond" />黑钻 0.001</div>
					<div className="display-power"><FontAwesome name="diamond" />原力值 32</div>
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
							<td>1</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>2</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>3</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>4</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>5</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>6</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>7</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>8</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>9</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						<tr>
							<td>10</td>
							<td>123</td>
							<td>456</td>
							<td>789</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}