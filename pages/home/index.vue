<template>
	<view class="container">
		<view class="info">
			<image class="avatar" :src="userInfo.avatar"></image>
			<view class="right">
				<view class="base">
					<text class="remark_username">{{userInfo.remark_username}}</text>
				</view>
				<view class="item">聊天号：{{userInfo.user_no||"-"}}</view>
				<view class="item">手机号：{{userInfo.phone||"-"}}</view>
				<view class="item"></view>
			</view>
		</view>
		
		<view class="operation-item">
			<uni-list>
				<uni-list-item
					title="账户二维码" 
					showArrow
					thumb-size="sm"
				/>
				<uni-list-item
					title="设置" 
					showArrow
					thumb-size="sm"
				/>
				<uni-list-item
					title="退出登录" 
					showArrow
					thumb-size="sm"
				/>
			</uni-list>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo: {						
					uid: 1,
					phone: "17859908727",
					remark_username: "Ac",
					username: "赵双岑",
					nickname: "Super笔中情",
					user_no: "superupzhaoshaungcen",
					address: "福建省厦门市",
					avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					gender: 1,//男-1；女-2；
					isStar: 1,//是否标星
					isFriend: 0,//是否好友
					searchSource: "来自手机号搜索",//好友推荐、其他等等
				}
			}
		},
		onLoad(option) {
			console.log("detail:",option)
		},
		methods: {
			addContactUser() {
				uni.showToast({
					title:'好友添加成功',
					icon:'none',
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	view {
		box-sizing: border-box;
	}
	.container {
		.info {
			display: flex;
			flex-direction: row;
			align-items: flex-start;
			background-color: white;
			padding: 50rpx 20rpx;
			.avatar {
				width: 130rpx;
				height: 130rpx;
				border-radius: 10rpx;
			}
			.right {
				display: flex;
				flex-direction: column;
				padding-left: 20rpx;
				box-sizing: border-box;
				.base {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					align-items: center;
					.remark_username {
						font-weight: bolder;
						font-size: 1.3rem;
					}
				}
				.item {
					font-size: 0.8rem;
					color: #666;
					padding-top: 10rpx;
				}
			}
		}
		.operation-item {
			margin-top: 20rpx;
		}
	}
</style>