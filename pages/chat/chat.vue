<template>
	<view class="container">
		<view class="message-list">
			<template v-for="(message,index) in messageList">
				<view 
					class="message-box" 
					:class="message.senderUserId == userInfo.id ? 'self-message-item' : ''" 
					:key="index"
				>
					<!-- 用户头像 -->
					<image 
						class="head-portrait"
						:src="message.senderUserId == userInfo.id ? (userInfo.headPortrait) : '../../static/chat-left.jpg'">
					</image>
					
					<!-- 消息内容 -->
					<view class="content">
						<view 
							class=""
							:class="message.senderUserId == userInfo.id ? 'self-message-text' : '.other-message-text'" 
						>
							{{message.content||"empty message..."}}
						</view>
					</view>
				</view>
				
				<view class="time-line">4月7日 下午17:53</view>
			</template>
		</view>
		
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
	export default {
		data() {
			return {
				userInfo: {
					id: 1,
					headPortrait: "../../static/chat-right.jpg"
				},
				form: {
					textMessage: "",//文本消息
				},
				messageList: [
					{
						id: 0,
						type: 1,
						senderUserId: 2,
						content: "如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。",
						
					},
					{
						id: 0,
						type: 1,
						senderUserId: 1,
						content: "如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。"
					},
				],
			}
		},
		created() {
			
		},
		mounted(option) {
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			console.log(option); //打印出上个页面传递的参数。
			uni.setNavigationBarTitle({
				title:option.chatTitle || "聊天"
			})
		},
		methods: {
			// 点击发送消息
			clickSendMessage() {
				if (this.form.textMessage.lenght <= 0) {
					console.log('请输入消息')
					return
				}
				this.showSelfMessage(this.form.textMessage,1)
				this.form.textMessage = ""
			},
			// 显示自己的消息在聊天页面
			showSelfMessage(content, messageType){
				this.messageList.push({
					id: 0,
					type: 1,
					senderUserId: this.userInfo.id,
					content: content
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import "./chat.scss";
</style>