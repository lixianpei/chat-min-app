<template>
	<view class="container">
		<uni-list :border="true">
			<template v-for="(chat,index) in chatList">
				<uni-list-chat
					:key="index"
					:title="chat.chatTitle"
					:note="chat.lastMessageData"
					:time="chat.lastMessageTime" 
					:avatar="chat.chatType == 'singleChat' ? chat.chatCover : null"
					:avatar-list="chat.chatType == 'groupChat' ? chat.avatarList : []"
					clickable
					@click="enterChat(chat)"
					badge-positon="left" 
					badge-text="1">
				</uni-list-chat>
			</template>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatList: [
					{
						chatId: 1,
						chatType: "singleChat",//singleChat-单聊；groupChat-群聊
						chatCover: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
						chatTitle: "张三",
						lastMessageData: "您收到一条新的消息",
						lastMessageTime: "2020-02-02 20:20",
						avatarList: []
					},
					{
						chatId: 2,
						chatType: "groupChat",//singleChat-单聊；groupChat-群聊
						chatCover: "",
						chatTitle: "李四",
						lastMessageData: "您收到一条群聊新消息",
						lastMessageTime: "2020-02-03 20:20",
						avatarList: [{
							url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
						}, {
							url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
						}, {
							url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
						}]
					},
				],
				avatarList: [{
					url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
				}, {
					url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
				}, {
					url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
				}]
			}
		},
		methods: {
			enterChat(chat){
				uni.navigateTo({
					url: `/pages/chat/chat?chatId=${chat.chatId}&chatTitle=${chat.chatTitle}&chatType=${chat.chatType}`
				});
			},
		}
	}
</script>

<style scoped lang="scss">
	.container {

	}
</style>
