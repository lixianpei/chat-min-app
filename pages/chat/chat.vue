<template>
	<view class="container" :style="{bottom: pageBottomHeight + 'px'}">
		<view class="message-list scroller">
			<template v-for="(message,index) in messageList">
				<!-- 事件类型：消息 -->
				<!-- <view>{{message.content||'--'}}</view> -->
				<view
					v-if="message.type == 1"
					class="message-box" 
					:class="message.sender == userInfo.id ? 'self-message-item' : ''" 
					:key="index"
				>
					<!-- 用户头像 -->
					<image 
						class="head-portrait" 
						:src="message.sender == userInfo.id ? userAvatar : message.senderInfo.avatarUrl">
					</image>
					
					<!-- 消息内容 -->
					<view class="content">
						<view v-if="message.sender != userInfo.id" class="message-sender-name">{{message.senderInfo.nickname||'0.0'}}</view>
						<view :class="message.sender == userInfo.id ? 'self-message-text' : 'other-message-text'">
							{{message.content||"empty message..."}}
							
							<view class="message-time">{{message.createdAt}}</view>
						</view>
					</view>
				</view>
				
				<!-- 事件类型：入群通知 -->
				<view v-if="message.type == 'entryGroup'" class="middle-message">{{message.content}}</view>
				
			</template>
		</view>
		
		<view id="viewBottomTag"></view>
		
		<view class="bottom-operation-tabbar">
			<view class="tabbar-list">
				
				<textarea 
					v-model="form.textMessage" 
					class="uni-input item message-input"
					type="text"
					maxlength="-1"
					:show-confirm-bar="false"
					hold-keyboard
					auto-height
					:adjust-position="false"
					cursor-spacing="20"
					placeholder="Message..."
					@focus="inputFocus"
					@blur="inputBlur"
				/>
				<button class="mini-btn item message-send" type="primary" size="mini" @click="clickSendMessage()">发送</button>	
			</view>
		</view>
	</view>
</template>

<script>
	import { getWebsocketHost } from '../../helper/config'
	import { userDetail,setMessageReadStatus,getMessageList,getRoomList } from '../../api/api.js'
	import { Enum } from '../../helper/enum'
	import { connectWebSocket } from '../../helper/websocket.js'
	import { getDatetime } from '../../helper/date.js'
	export default {
		data() {
			return {
				messageList: [
					{
						id: 1,
						type: 1,
						content: "ddddddddddd",
					}
				],
				isGroupChat: true,
				userInfo: uni.getStorageSync('userInfo'),
				userAvatar: uni.getStorageSync('avatar'),
				friendInfo: {},//私聊用户信息
				form: {
					textMessage: "",//文本消息
				},
				pageBottomHeight: 0,
				roomInfo: {},//聊天室信息
			}
		},
		created() {
		},
		mounted(option) {
		},
		onLoad: function (option) {
			
			//option为object类型，会序列化上个页面传递的参数
			console.log("chat.onLoad.option...",option); //打印出上个页面传递的参数。
			this.handleAsyncInfo(option)
		},
		onShow() {
			uni.onSocketMessage(res => {
			  console.log('Chat...收到服务器内容：' + res.data);
			  this.handleWebsocketData(res.data)
			})
			
			
		},
		methods: {
			async handleAsyncInfo(option) {
				console.log('查询聊天室消息------------')
				await getRoomList({roomId: option.roomId ?? 0}).then(res => {
					console.log("roomList",res)
					let roomInfo = res[0] ?? ""
					if (!roomInfo) {
						console.log("聊天室信息无法获取：",res)
						return
					}
					
					this.roomInfo = roomInfo
					
					//查询好友信息
					let roomTitle = ""
					if (roomInfo.type == 1) {
						//私聊好友数据更新
						this.friendInfo = this.getFriendInfoByRoomUserListData(roomInfo.users)
						roomTitle = this.friendInfo.nickname ?? "--"
					} else if (roomInfo.type == 2) {
						//群聊
						roomTitle = roomInfo.title
					}
					
					
					uni.setNavigationBarTitle({
						title: roomTitle || "聊天室"
					})
					
				}).catch(err => {
					console.log(err)
				})
				
				// console.log('查询好友信息---------------0')
				// //查询好友信息
				// await userDetail({id: parseInt(option.id||0)}).then(res => {
				// 	this.friendInfo = res
				// 	this.friendInfo.id = parseInt(res.id)
				// 	if (this.friendInfo.id) {
				// 	}
				// }).catch(err => {
				// 	console.log(err)
				// })
				
				//查询群信息
				console.log('发送消息已读状态---------------1')
				
				await getMessageList({
					page: 1,
					pageSize: 10000,
					roomId: this.roomInfo.roomId,
				}).then(res => {
					// console.log(res)
					if (res.list) {
						this.messageList = res.list
						this.$forceUpdate(); // 强制组件重新渲染
					}
				})
				
				//发送消息已读状态
				console.log('消息设置已读---------------1')
				await setMessageReadStatus({
					roomId: parseInt(this.roomInfo.roomId ?? 0),
				}).then(res => {
					console.log(res)
				})
				
				
				this.$nextTick(() => {
					this.scrollToBottom()
				})
			},
			//通过用户列表获取好友信息
			getFriendInfoByRoomUserListData(users = []) {
				for (let i=0; i<users.length; i++) {
					let user = users[i]
					if (user.userId && user.userId != this.userInfo.id) {
						return user
					}
				}
				return []
			},
			// 点击发送消息
			clickSendMessage() {
				if (this.form.textMessage.lenght <= 0) {
					console.log('请输入消息')
					return
				}
				
				//私聊消息接收人
				let receiver = parseInt(this.friendInfo.id)
				
				//考虑先把消息显示，后续接收到消息后标记为发生成功 TODO
				// 需要增加前端自定义消息ID，这样能判断服务器回收后的消息ID，这样能判断是否上传成功
				this.showSelfMessage(this.form.textMessage)
				console.log("消息准备推送到服务器")
				let messageJson = JSON.stringify({
					"type": Enum.messageType.normal,//目前仅支持text
					"receiver": receiver,
					"roomId": parseInt(this.roomInfo.roomId ?? 0),//暂不支持
					"content": this.form.textMessage,
				})
				uni.sendSocketMessage({
					data: messageJson
				});
				
					
				this.form.textMessage = ""
				
				//发送消息到ws服务器
			},
			// 显示自己的消息在聊天页面
			showSelfMessage(content, messageType){
				this.messageList.push({
					id: 0,
					type: Enum.messageType.normal,
					sender: this.userInfo.id,
					receiver: this.friendInfo.id,
					content: content,
					createdAt: getDatetime(),
				})
				this.$nextTick(() => {
					this.scrollToBottom()
				})
			},
			// 显示他人的消息在聊天页面
			showOtherUserMessage(messageData){
				this.messageList.push(messageData)
			},
			handleWebsocketData(message) {
				if (message == "ping") {
					//发送pong返回给服务器
				} else {
					//处理业务数据
					const messageData = JSON.parse(message)
					if (messageData) {
						
					}
					let sender = parseInt(messageData.sender)
					let receiver = parseInt(messageData.receiver)
					let roomId = parseInt(messageData.roomId)
					let friendId = this.friendInfo.userId
					let roomType = messageData.roomInfo.type
					
					if (roomId !== this.roomInfo.roomId) {
						//私聊判断消息是否属于当前页面的用户
						console.log(`消息来了，但不属于当前聊天室的好友信息，暂不显示，，当前聊天框好友ID=${friendId} sender=${sender} receiver=${receiver} groupId=${groupId}`)
						return
					}
					
					let messageTypes = [1, 2, 3, 4, 5,6]
					if (messageTypes.includes(messageData.type)) {
						console.log("能处理的消息：",messageData)
						this.messageList.push(messageData)
						this.$nextTick(() => {
							this.scrollToBottom()
						})
					} else {
						//不支持显示的消息
						console.log('消息不支持显示:', messageData)
					}
					
				}
			},
			scrollToBottom() {
				uni.pageScrollTo({
					selector: "#viewBottomTag"
				})
			},
			inputFocus(e) {
				console.log("inputFocus....",e.detail.height)
				this.pageBottomHeight = e.detail.height
			},
			inputBlur() {
				console.log("inputBlur....")
				this.pageBottomHeight = 0
			},
		}
	}
</script>

<style scoped lang="scss">
	@import "./chat.scss";
</style>