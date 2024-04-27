<template>
	<view class="container">
		<uni-list :border="true">
			<template v-for="(chat,index) in chatList">
				<uni-list-chat
					:key="index"
					:title="chat.chatTitle"
					:note="chat.lastMessageData"
					:time="chat.lastMessageTime" 
					:avatar-list="chat.avatarList.length == 0 ? defaultAvatar : chat.avatarList"
					clickable
					@click="enterChat(chat)"
					badge-positon="left" 
					:badge-text="chat.unread">
				</uni-list-chat>
			</template>
		</uni-list>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				defaultAvatar: [
					{
						url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					}
				],
				chatList: [
					{
						id: -111,
						chatType: "groupChat",//singleChat-单聊；groupChat-群聊
						chatTitle: "李四",
						lastMessageData: "您收到一条群聊新消息",
						lastMessageTime: "2020-02-03 20:20",
						unread: 0,
						avatarList: [{
							url: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png'
						}]
					},
				],
			}
		},
		methods: {
			enterChat(chat){
				uni.navigateTo({
					url: `/pages/chat/chat?chatId=${chat.chatId}&chatTitle=${chat.chatTitle}&chatType=${chat.chatType}`
				});
			},
			handleWebsocketData(message) {
				message = JSON.parse(message)
				console.log(message)
				let messageType = message.type
				let messageContent = ""
				let messageTime = message.time ?? ''
				let chatTitle = ""
				let avatarList = []
				
				let chatItemKey = this.findChatListItem(message.sender,message.groupId,message.type)
				console.log("chatItemKey...",chatItemKey)
				
				//消息类型
				switch(messageType) {
					case 'text':
						messageContent = message.content
						break
					default:
						messageContent = "新消息"
				}
				
				console.log('message.senderInfo')
				console.log(message.senderInfo)
				
				//聊天类型
				if (message.groupId > 0) {
					//群聊
					chatTitle = message.groupInfo.title
					avatarList = []
					
				} else if (message.receiver > 0) {
					//单聊
					chatTitle = message.senderInfo.nickname
					avatarList = [{
						url: message.senderInfo.avatar
					}]
				}
				
				if (chatItemKey >= 0) {
					//列表中存在，直接更新源数据
					this.chatList[chatItemKey].id = message.groupId //消息群ID
					this.chatList[chatItemKey].lastMessageData = messageContent
					this.chatList[chatItemKey].lastMessageTime = messageTime
					this.chatList[chatItemKey].chatTitle = chatTitle
					this.chatList[chatItemKey].avatarList = avatarList
					let unread = parseInt(this.chatList[chatItemKey].unread)
					unread = unread > 9 ? '9+' : (unread + 1)
					this.chatList[chatItemKey].unread = unread
				} else {
					//聊天列表中不存在，新增
					this.chatList.unshift({
						id: message.sender, //消息发送者
						chatType: messageType,
						chatTitle: chatTitle,
						lastMessageData: messageContent,
						lastMessageTime: messageTime,
						avatarList: avatarList,
						unread: 1,
					})
				}
				
			},
			findChatListItem(sender,groupId,type) {
				for (let i = 0; i<this.chatList.length; i++) {
					let item = this.chatList[i]
					if (item.chatType == type && (item.id == sender || item.id == groupId)) {
						return i
					}
				}
				return -1
			},
		},
		onShow() {
			let _this = this
			uni.onSocketMessage(function (res) {
			  console.log('ChatList...收到服务器内容：' + res.data);
			  _this.handleWebsocketData(res.data)
			})
		},
	}
</script>

<style scoped lang="scss">
	.container {

	}
</style>
