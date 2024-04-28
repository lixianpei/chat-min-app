<template>
	<view class="container">
		<view id="messageContainer" class="message-list scroller">
			<template v-for="(message,index) in messageList">
				<!-- 事件类型：消息 -->
				<view
					v-if="message.type == 'text'"
					class="message-box" 
					:class="message.sender == userInfo.id ? 'self-message-item' : ''" 
					:key="index"
				>
					<!-- 用户头像 -->
					<image 
						class="head-portrait" 
						:src="message.sender == userAvatar ? userAvatar : message.senderInfo.avatar">
					</image>
					
					<!-- 消息内容 -->
					<view class="content">
						<view v-if="message.sender != userInfo.id" class="message-sender-name">{{message.senderInfo.nickname||'0.0'}}</view>
						<view :class="message.sender == userInfo.id ? 'self-message-text' : 'other-message-text'">
							{{message.content||"empty message..."}}
							
							<view class="message-time">{{message.time}}</view>
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
					:adjust-position="true"
					cursor-spacing="20"
					placeholder="Message..."
				/>
				<button class="mini-btn item message-send" type="primary" size="mini" @click="clickSendMessage()">发送</button>	
			</view>
		</view>
	</view>
</template>

<script>
	import { getWebsocketHost } from '../../helper/config'
	import { userDetail } from '../../api/api.js'
	export default {
		data() {
			return {
				isGroupChat: true,
				userInfo: uni.getStorageSync('userInfo'),
				userAvatar: uni.getStorageSync('avatar'),
				friendInfo: {},//私聊用户信息
				form: {
					textMessage: "",//文本消息
				},
				messageList: [],
			}
		},
		created() {
		},
		mounted(option) {
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log("chat.onLoad.option...",option); //打印出上个页面传递的参数。
			//查询好友信息
			userDetail({id: parseInt(option.id||0)}).then(res => {
				this.friendInfo = res
				this.friendInfo.id = parseInt(res.id)
				if (this.friendInfo.id) {
					uni.setNavigationBarTitle({
						title: this.friendInfo.nickname || "聊天室"
					})
				}
			}).catch(err => {
				console.log(err)
			})
		},
		onShow() {
			let _this = this
			uni.onSocketMessage(function (res) {
			  console.log('Chat...收到服务器内容：' + res.data);
			  _this.handleWebsocketData(res.data)
			})
		},
		methods: {
			// 点击发送消息
			clickSendMessage() {
				if (this.form.textMessage.lenght <= 0) {
					console.log('请输入消息')
					return
				}
				//this.showSelfMessage(this.form.textMessage,1)
				
				//考虑先把消息显示，后续接收到消息后标记为发生成功 TODO
				let messageJson = JSON.stringify({
					"type": "text",//目前仅支持text
					"message_id": 0, //消息ID，可暂时先填空
					"sender": this.userInfo.id,//暂时使用登录接口是调用的手机号
					"receiver": 0,//暂时使用对方手机号
					"group_id": 0,//暂不支持
					"content": this.form.textMessage,
				})
				uni.sendSocketMessage({
					data: messageJson
				});
				console.log("消息已经推送到服务器")
					
				this.form.textMessage = ""
				
				//发送消息到ws服务器
			},
			// 显示自己的消息在聊天页面
			showSelfMessage(content, messageType){
				this.messageList.push({
					event: 'message',
					id: 0,
					type: 1,
					senderUserId: this.userInfo.id,
					content: content
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
					let groupId = parseInt(messageData.groupId)
					let friendId = this.friendInfo.id
					console.log(`消息来了，当前聊天框好友ID=${friendId} sender=${sender} receiver=${receiver} groupId=${groupId}`)
					if (friendId !== sender) {
						//私聊判断消息是否属于当前页面的用户
						console.log(`消息来了，但不属于当前聊天室的好友信息，暂不显示，，当前聊天框好友ID=${friendId} sender=${sender} receiver=${receiver} groupId=${groupId}`)
						return
					}
					
					let messageTypes = ['text', 'entryGroup', 'addFriend', 'userEntry', 'userExit','binary']
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
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./chat.scss";
</style>