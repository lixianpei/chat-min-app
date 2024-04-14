<template>
	<view class="container">
		<image class="gb" src="/static/icon/login-image.png"></image>
		<view class="hello">Go聊天</view>
		<button
			class="mini-btn login-button" 
			type="primary" 
			size="mini"
			open-type="getPhoneNumber"
			@getphonenumber="getPhonenNmber">
			授权微信登录
		</button>
		<!-- <button type="default" open-type="getPhoneNumber" @getphonenumber="decryptPhoneNumber">获取手机号</button> -->

	</view>
</template>

<script>
	import { ping } from '../../api/api'
	export default {
		data() {
			return {
				form: {
					phone: 18083198680,
					nickname: "HiHi",
				}
			}

		},
		onLoad() {
			ping().then(res => {
				console.log('ping result:',res)
			}).catch(err => {
				console.log(err)
			})
		},
		onReady() {},
		methods: {
			getPhonenNmber(res) {
				console.log(res.detail)
				// 点击某个按钮，弹出请求微信授权界面。
				// 点击允许按钮，获取用户微信绑定的手机号与openId
				// 请求后端接口，实现登录。
			},
		}
	}
</script>


<style scoped lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		z-index: 9;
		height: 100vh;
		padding-top: 50%;
		.gb {
			width: 100vw;
			height: 100vh;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}
		.hello {
			text-align: center;
			font-size: 1.1rem;
			font-weight: bold;
		}
		.login-button {
			width: 400rpx;
			margin-top: 50rpx;
			font: 1rem;
			font-weight: bold;
		}
	}
</style>