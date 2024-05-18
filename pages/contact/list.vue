<template>
	<view class="container">
		<!-- 操作栏目 -->
		<view class="menu-list">
			<view class="item"  @click="enterSearchUser()">
				<image class="cover" src="/static/icon/newFriend.png"> </image>
				<view class="name">新的朋友</view>
			</view>
			<view class="item">
				<image class="cover" src="/static/icon/groupChat.png"> </image>
				<view class="name">群聊</view>
			</view>
		</view>
		
		<!-- 联系人列表 -->
		<view class="menu-title">我的联系人</view>
		<view class="menu-list">
			<template v-for="(contact,index) in contactList">
				<view class="item" @click="enterChat(contact)" :key="index">
					<image class="cover" :src="contact.avatarUrl"></image>
					<view class="name">{{contact.nickname||"EmptyNickname"}}</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	import { getFriendContact } from '../../api/api.js'
	export default {
		data() {
			return {
				contactList: [],
			}
		},
		onShow() {
			console.log("contact...onShow....")
			getFriendContact({}).then(res => {
				console.log(res)
				this.contactList = res
			}).catch(err => {
				console.log(err)
			})
		},
		methods: {
			enterChat(item){
				uni.navigateTo({
					url: `/pages/chat/chat?id=${item.id}`
				});
			},
			enterSearchUser(){
				uni.navigateTo({
					url:'/pages/contact/search'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.container {
		.menu-title {
			padding: 10rpx 20rpx;
			font-size: 24rpx;
			color: #999;
		}
		.menu-list {
			background-color: white;
			.item {
				display: flex;
				flex-direction: row;
				align-items: center;
				padding-left: 20rpx;
				box-sizing: border-box;
				.cover {
					width: 80rpx;
					height: 80rpx;
					border-radius: 10rpx;
					box-sizing: border-box;
					flex-shrink: 0;
				}
				.name {
					width: 100%;
					border-bottom: 1rpx solid #eee;
					line-height: 110rpx;
					padding-left: 20rpx;
					box-sizing: border-box;
				}
			}
			.item:last-child .name {
				border-bottom: 1rpx solid white;
			}
		}
	}
</style>
