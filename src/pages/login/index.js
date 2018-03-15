import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { getValidation } from '../../apis'

export default class extends Component {
	phoneNumValidation (phoneNum) {
		if (phoneNum.length === 11) {
			return true
		} else {
			alert('请输入正确的手机号')
			return false
		}
	}

	validate () {
		const phoneNum = this.phoneNumInput.value
		if (this.phoneNumValidation (phoneNum)) {
			getValidation(phoneNum)
		}
	}

	render() {
		return (
			<div className="login">
				<h1>登录</h1>
				<div className="phoneNum"><label>+86</label><input type="text" ref={(input) => {this.phoneNumInput = input }}/></div>
				<div className="verification"><input type="text" placeholder="短信验证码"/><button onClick={this.validate.bind(this)}>获取验证码</button></div>
				<button>开启星球之旅</button>
			</div>
		)
	}
}