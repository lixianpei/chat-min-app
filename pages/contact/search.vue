<template>
	<view class="container">
		<view class="search-view">
			<uni-search-bar
				radius="5" 
				placeholder="账号/手机号" 
				clearButton="always" 
				cancelButton="none"
				bgColor="#ffffff"
				@confirm="search"
			/>
		</view>
		
		<view v-show="isShowEmptyCustomer" class="empty-customer">该用户不存在</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				searchValue: '123123',
				isShowEmptyCustomer: false,
			}
		},
		methods: {
			search(res) {
				//TODO：reques 查詢用戶
				let userInfo = {
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
				this.isShowEmptyCustomer = userInfo && userInfo.uid > 0
				if (!userInfo) {
					uni.showToast({
						title: '查不到相关用户信息',
						icon: 'none'
					})
					return
				}
				uni.navigateTo({
					url: '/pages/contact/detail'
				})
			},
		},
		onBackPress() {
			// #ifdef APP-PLUS
			plus.key.hideSoftKeybord();
			// #endif
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.search-view {
		}
		.empty-customer {
			margin-top: 20rpx;
			padding: 50rpx;
			text-align: center;
			font-size: 26rpx;
			color: #999;
			background-color: white;
		}
	}
</style>