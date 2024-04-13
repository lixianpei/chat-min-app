<template>
	<view class="container">
		<image class="gb" src="/static/icon/login-image.png"></image>
		<view class="hello">开始GO聊天</view>
		<view class="login-main">
			<view class="item">
				<view class="title">手机号</view>
				<uni-easyinput v-model="form.phone" class="uni-mt-5 input" primaryColor="#c0c4cc" trim clearable placeholder="请输入手机号">
				</uni-easyinput>
			</view>
			<view class="item">
				<view class="title">昵称</view>
				<uni-easyinput v-model="form.nickname" class="uni-mt-5 input" primaryColor="#c0c4cc" trim clearable placeholder="请输入手机号">
				</uni-easyinput>
			</view>
			<!-- <view class="login-button">立即登录</view> -->
			<button class="mini-btn login-button" type="primary" size="mini" @click="clickLogin()">立即登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {
					phone: 18083198680,
					nickname: "HiHi",
				}
			}

		},
		onLoad() {},
		onReady() {},
		methods: {
			clickLogin() {
				uni.showToast({
					title: '登录成功',
					icon: 'none'
				})
				uni.switchTab({
					url: '/pages/contact/list'
				})
			},
		}
	}
</script>


<style scoped lang="scss">
	.container {
		position: relative;
		z-index: 9;
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
			padding-top: 100rpx;
		}
		.login-main {
			background-color: white;
			margin: 50rpx;
			padding: 50rpx 30rpx;
			border-radius: 10rpx;
			.item {
				margin-bottom: 40rpx;
				.title {
					font-weight: bold;
					font-size: 0.9rem;
					margin-bottom: 10rpx;
				}
				.input {
					border-radius: 50rpx;
					border: 1rpx solid red;
				}
			}
			.login-button {
				width: 100%;
				height: 80rpx;
				border-radius: 50rpx;
				line-height: 80rpx;
				font-weight: bold;
				margin-top: 20rpx;
			}
		}
	}
</style>