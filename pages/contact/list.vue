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
					<image class="cover" :src="contact.avatar"></image>
					<view class="name">{{contact.username||"EmptyUsername"}}</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				contactList: [
					{
						id: 1,
						username: "张三",
						avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					},
					{
						id: 1,
						username: "李四",
						avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					},
					{
						id: 1,
						username: "王五",
						avatar: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					}
				],
			}
		},
		methods: {
			enterChat(chat){
				uni.navigateTo({
					url: `/pages/chat/chat?chatId=0&chatTitle=${chat.username}&chatType=singleChat`
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
