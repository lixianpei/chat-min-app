<template>
	<view class="container">
		<uni-list :border="true">
			<template v-for="(chat,index) in chatList">
				<uni-list-chat
					:key="index"
					:title="chat.title"
					:note="formatListMessage(chat.lastMessageData)"
					:time="chat.lastMessageTime" 
					:avatar-list="chat.avatarList"
					clickable
					@click="enterChat(chat)"
					badge-positon="left" 
					:badge-text="formatUnreadCount(chat.unread)">
				</uni-list-chat>
			</template>
		</uni-list>
	</view>
</template>

<script>
	import { getRoomList } from '../../api/api.js'
	import { formatDatetime } from '../../helper/date.js'
	import { Enum } from '../../helper/enum'
	import { connectWebSocket } from '../../helper/websocket.js'
	export default {
		data() {
			return {
				userInfo: uni.getStorageSync('userInfo'),
				defaultAvatar: [
					{
						url: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png",
					}
				],
				// chatItem: {
				// 	roomId: 0, //消息发送者
				// 	type: 1,//聊天类型
				// 	title: 群名称或用户昵称,
				// 	lastMessageId: 消息内容,
				// 	lastMessage: 消息内容,
				// 	lastMessageTime: 最新消息时间,
				// 	avatarList: avatarList,
				// 	unread: 1,
				// },
				chatList: [],
			}
		},
		onShow() {
			
			uni.onSocketError(function (res) {
			  console.log('list....WebSocket连接打开失败，请检查！');
			});
			
			
			uni.onSocketMessage(res => {
			  console.log('ChatList...收到服务器内容：' + res.data);
			  this.handleWebsocketData(res.data)
			})
			
			getRoomList({}).then(res => {
				console.log("getRoomList.....",res)
				if (!res || !res.length) {
					return
				}
				let items = []
				for (let i=0; i<res.length; i++) {
					let item = res[i]
					let lastMessage = item.lastMessage ?? null
					let lastMessageId = item.lastMessageId ?? 0
					let avatarUrls = []
					if (item.avatarUrls.length > 0) {
						for ( let ai = 0; ai<item.avatarUrls.length; ai++) {
							avatarUrls.push({
								url: item.avatarUrls[ai]
							})
						}
					}
					
					items.push({
						roomId: item.roomId, //消息发送者
						type: item.type,//聊天类型
						title: item.title,
						lastMessageData: lastMessage && lastMessage.content ? lastMessage.content : "",
						lastMessageTime: lastMessage && lastMessage.messageId > 0 ? lastMessage.createdAt : "",
						avatarList: avatarUrls,
						unread: item.unreadCount ?? 0,
					})
				}
				this.chatList = items
			})
		},
		methods: {
			enterChat(chat){
				uni.navigateTo({
					url: `/pages/chat/chat?roomId=${chat.roomId}`
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
				let chatId = 0
				let roomInfo = message.roomInfo ?? ""
				let senderInfo = message.senderInfo ?? ""
				let roomId = message.roomId //群聊ID
				let roomType = roomInfo.type
				let roomTitie = ""
				
				if (!roomInfo || !senderInfo || !roomId) {
					console.log("无法处理的消息：", message)
					return
				}
				
				
				let chatItemKey = this.findChatListItem(roomId)
				console.log("chatItemKey...",chatItemKey)
				if (parseInt(message.sender) == 0 || message.sender == this.userInfo.id) {
					return
				}
				
				//消息类型
				switch(messageType) {
					case Enum.messageType.text:
						messageContent = message.content
						break
					case Enum.messageType.image:
						messageContent = '[图片]'
						break
					case Enum.messageType.audio:
						messageContent = '[语音]'
						break
					case Enum.messageType.audio:
						messageContent = '[视频]'
						break
					default:
						consoel.log("不能处理的消息：",message)
						return
				}
								
				if (roomType == 1) {
					//私聊
					roomTitie = senderInfo.nickname
					avatarList = [{
						url: senderInfo.avatarUrl
					}]
					
				} else if (roomType == 2) {
					//群聊
					roomTitie = roomInfo.title
					avatarList = []
				}
				
				if (chatItemKey >= 0) {
					//列表中存在，直接更新源数据
					this.chatList[chatItemKey].roomId = roomId //消息群ID
					this.chatList[chatItemKey].lastMessage = message
					this.chatList[chatItemKey].lastMessageData = messageContent
					this.chatList[chatItemKey].lastMessageTime = messageTime
					this.chatList[chatItemKey].title = roomTitie
					this.chatList[chatItemKey].avatarList = avatarList
					this.chatList[chatItemKey].unread = parseInt(this.chatList[chatItemKey].unread) + 1
				} else {
					//聊天列表中不存在，新增
					this.chatList.unshift({
						roomId: roomId, //消息发送者
						type: roomType,
						title: roomTitie,
						lastMessageData: messageContent,
						lastMessageTime: messageTime,
						avatarList: avatarList,
						unread: 1,
						lastMessage: message,
					}) 
				}
			},
			findChatListItem(roomId) {
				if (!this.chatList) {
					return -1
				}
				for (let i = 0; i<this.chatList.length; i++) {
					let item = this.chatList[i]
					if (item.roomId == roomId) {
						return i
					}
				}
				return -1
			},
			formatDatetime(datetimeStr) {
				return formatDatetime(datetimeStr)
			},
			formatListMessage(content) {
				if (!content) {
					return ""
				}
				let str = content.replace(/\n/g, " ")
				if (str.length > 12) {
					return str.slice(0, 12) + "..."
				}
				return str
			},
			formatUnreadCount(num) {
				return num
			},
		},
	}
</script>

<style scoped lang="scss">
	.container {

	}
	.single-line-text {
	  white-space: nowrap; /* 禁止文本换行 */
	  overflow: hidden; /* 隐藏超出容器范围的内容 */
	  text-overflow: ellipsis; /* 如果内容溢出，用省略号表示 */
	  width: 200px; /* 宽度限制 */
	}

</style>
