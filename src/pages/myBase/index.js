import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

export default class extends Component {
	render() {
		return (
			<div className="my-base-wrapper">
				<h2 className="my-base-header">星球基地<button><FontAwesome name="cog" style={{ fontSize: "3em", color: "white" }}/></button></h2>
				<div className="my-base my-base-user">
					<div className="user-favicon">
						<FontAwesome name="user-circle" style={{ fontSize: "10em" }} />
					</div>
					<p>Ulysiss</p>
					<span className="user-title">星球居民</span>
					<button><FontAwesome name="google-wallet" style={{ fontSize: "1.5em", color: "#000", marginRight: "0.5em" }} />我的资产</button>
					<Link to="/task"><button><FontAwesome name="rocket" style={{ fontSize: "1.5em", color: "#000", marginRight: "0.5em" }} />加速黑钻</button></Link>
				</div>
				<div className="my-base my-base-bidding">
					<h2>黑钻竞拍</h2><span>3月中旬，不见不散</span>
					<div>
						拿黑钻 参与商品竞拍
					</div>
				</div>
				<div className="my-base" id="my-base-plant"><h2>星球基地</h2></div>
			</div>
		)
	}
}