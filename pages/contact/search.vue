<template>
	<view class="container">
		<view class="search-view">
			<uni-search-bar
				radius="5" 
				placeholder="账号/手机号" 
				clearButton="always" 
				cancelButton="none"
				bgColor="#ffffff"
				v-model="searchValue"
				@confirm="search"
			/>
		</view>
		
		<view v-if="isShowEmptyCustomer" class="empty-customer">用户不存在</view>
	</view>
</template>

<script>
	import { searchUser } from '../../api/api.js'
	export default {
		data() {
			return {
				searchValue: '',
				isShowEmptyCustomer: false,
			}
		},
		methods: {
			search(res) {
				//TODO：reques 查詢用戶
				searchUser({keyword: this.searchValue}).then(userInfo => {
					if (userInfo && Object.keys(userInfo).length > 0) {
						uni.navigateTo({
							url: '/pages/contact/detail?id='+userInfo.id
						})
					} else {
						this.isShowEmptyCustomer = true
						uni.showToast({
							title: '查不到相关用户信息',
							icon: 'none'
						})
						return
					}
				}).catch(err => {
					console.log(err)
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