<template>
	<view class="container" :style="{bottom: pageBottomHeight + 'px'}">
		<view class="message-list scroller">
			<template v-for="(message,index) in messageList">
				<!-- 事件类型：消息 -->
				<!-- <view>{{message.content||'--'}}</view> -->
				<view
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
						<!-- TODO 计算复杂css -->
						<view :class="[
								{'self-message': message.sender == userInfo.id},
								{'other-message': message.sender != userInfo.id},
								'message-type-'+message.type
							]"
						>
							<!-- 文本消息 -->
							<view v-if="message.type == 1" class="text">{{message.content||"empty message..."}}</view>
							
							<!-- 图片 -->
							<view v-if="message.type == 2" class="image">
								<image class="img" :src="formatShowContentFile(message.content)" mode="aspect-fit" style="width: 200rpx;height: 200rpx;" @click="previewImage(message)"></image>
							</view>
							
							<!-- 语音消息 -->
							<view v-if="message.type == 3" class="audio">
								{{formatShowContentAudioDuration(message.content)}} &nbsp;&nbsp;
								<image class="icon" src="../../static/audio.png" @click="audioPlay(message.content)"></image>
							</view>
							
							<!-- 视频 -->
							<view v-if="message.type == 4" class="video">
								<video :src="formatShowContentFile(message.content)" enable-danmu danmu-btn controls style="width: 400rpx;height: 400rpx;"></video>
							</view>
							            
										
							<!-- <view class="message-time">{{message.createdAt}}</view> -->
						</view>
					</view>
				</view>
				
				<!-- 事件类型：入群通知 -->
				<view v-if="message.type == 'entryGroup'" class="middle-message">{{message.content}}</view>
				
			</template>
		</view>
		
		<view id="viewBottomTag"></view>
		
		<view class="bottom-operation-tabbar" :style="{bottom: keyboardheight + 'px'}">
			<view class="tabbar-list">
				<image @tap="startAudio" class="icon item" src="../../static/voice.png"></image>
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
					placeholder="请输入内容"
					@focus="inputFocus"
					@blur="inputBlur"
				/>
				<image class="icon item" src="../../static/face.png"></image>
				<image v-if="form.textMessage.length == 0" @click="chooseMedia()" class="icon item" src="../../static/add.png"></image>
				<button v-if="form.textMessage.length > 0" class="mini-btn item message-send" type="primary" size="mini" @click="clickSendMessage()">发送</button>	
			</view>
		</view>
	</view>
</template>

<script>
	import { getWebsocketHost } from '../../helper/config'
	import { userDetail,setMessageReadStatus,getMessageList,getRoomList,sendMessage,uploadFile } from '../../api/api.js'
	import { Enum } from '../../helper/enum'
	import { connectWebSocket } from '../../helper/websocket.js'
	import { getDatetime } from '../../helper/date.js'
	
	// 获取全局唯一的录音管理器 recorderManager
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;


	export default {
		data() {
			return {
				messageList: [],
				isGroupChat: true,
				userInfo: uni.getStorageSync('userInfo'),
				userAvatar: uni.getStorageSync('avatar'),
				friendInfo: {},//私聊用户信息
				form: {
					textMessage: "",//文本消息
				},
				pageBottomHeight: 0,
				keyboardheight: 0,
				roomInfo: {},//聊天室信息
				
				// text: 'uni-app',
				audioIsOk: false,//录音是否有效：邮箱时将录音文件发送到服务器
				voicePath: ''
			}
		},
		created() {
		},
		computed: {
			computedClasses(item) {
				  return (item) => {
					return {
					  'class1': true,
					  'class2': true // 根据循环中的参数生成类名
					};
				  };
				}
		},
		mounted(option) {
		},
		onLoad: function (option) {
			// let self = this;
			// recorderManager.onStop(function (res) {
			// 	console.log('recorder stop' + JSON.stringify(res));
			// 	self.voicePath = res.tempFilePath;
			// });
					
			let _this = this
			recorderManager.onStop(function(audioRes) {
				console.log('录音回调事件：' + JSON.stringify(audioRes));
				console.log(audioRes.tempFilePath)
				_this.voicePath = audioRes.tempFilePath;
				if (!_this.audioIsOk) {
					console.log('用户取消录音发送')
					return
				}
				//上传文件
				uploadFile({
					filepath: _this.voicePath,
					formData: {
						subject: "RoomAudioFile"
					}
				}).then(fileRes => {
					console.log("uploadRadioRes:",fileRes)
					//构建成语音文件消息发送
					sendMessage({
						"type": Enum.messageType.audio,
						"receiver": 0,
						"roomId": parseInt(_this.roomInfo.roomId ?? 0),
						"content": JSON.stringify({
							attachmentId: fileRes.attachmentId ?? 0,
							filepath: fileRes.filepath ?? "",
							duration: audioRes.duration
						}),
					}).then(messageRes => {
						console.log('sendAudioMessageRes',messageRes)
						_this.showSelfMessage(messageRes)
					})
				})
			});
			
			
			//option为object类型，会序列化上个页面传递的参数
			console.log("chat.onLoad.option...",option); //打印出上个页面传递的参数。
			this.handleAsyncInfo(option)
			
			// 在页面的逻辑部分（例如 .js 文件中）
			uni.getSystemInfo({
			  success: (res) => {
			    // 获取屏幕的可视区域高度
			    let windowHeight = res.windowHeight;
			    // 获取导航栏的高度
			    let navigationBarHeight = res.statusBarHeight + 44; // 假设导航栏高度为状态栏高度加上标题栏高度
			
			    // 计算页面的可视化高度
			    let pageHeight = windowHeight - navigationBarHeight;
				// this.pageBottomHeight = pageHeight
			    console.log("页面的可视化高度：" + pageHeight);
				
				// 在页面的逻辑部分（例如 .js 文件中）
				// uni.createSelectorQuery().select('.bottom-operation-tabbar').boundingClientRect((rect) => {
				//   if (rect) {
				//     let elementHeight = rect.height;
				//     console.log("元素的高度：" + elementHeight);
				// 	this.pageBottomHeight = -(pageHeight + elementHeight)
				//   } else {
				//     console.log("未找到指定元素");
				//   }
				// }).exec();

			  }
			});

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
				await getRoomList({roomId: parseInt(option.roomId ?? 0)}).then(res => {
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
				sendMessage({
					"type": Enum.messageType.text,//目前仅支持text
					"receiver": receiver,
					"roomId": parseInt(this.roomInfo.roomId ?? 0),//暂不支持
					"content": this.form.textMessage,
				}).then(res => {
					console.log('sendMessageRes',res)
					this.showSelfMessage(res)
					this.form.textMessage = ""
				})
				
				// console.log("消息准备推送到服务器")
				// let messageJson = JSON.stringify({
				// 	"type": Enum.messageType.text,//目前仅支持text
				// 	"receiver": receiver,
				// 	"roomId": parseInt(this.roomInfo.roomId ?? 0),//暂不支持
				// 	"content": this.form.textMessage,
				// })
				// uni.sendSocketMessage({
				// 	data: messageJson
				// });
				
					
				// this.form.textMessage = ""
				
				//发送消息到ws服务器
			},
			// 显示自己的消息在聊天页面
			showSelfMessage(message){
				message.id = message.messageId ?? 0
				message.createdAt = message.time
				this.messageList.push(message)
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
					
					let messageTypes = [1, 2, 3, 4]
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
				console.log("inputFocus....e.detail.height",e)
				this.keyboardheight = e.detail.height
				this.pageBottomHeight = this.pageBottomHeight + this.keyboardheight
			},
			inputBlur() {
				console.log("inputBlur....")
				this.keyboardheight = 0
				this.pageBottomHeight = this.pageBottomHeight + this.keyboardheight
			},
			getClass() {
				return 'getClass'
			},
			formatShowContentFile(content) {
				//文件类消息处理为json数据
				let data = JSON.parse(content)
				return data.filepath ?? ""
			},
			formatShowContentAudioDuration(content) {
				//文件类消息处理为json数据
				let data = JSON.parse(content)
				let d = data.duration ?? 0
				d = d <= 0 ? 0 : Math.floor(parseInt(d) / 1000)
				return d + "''"
			},
			chooseMedia() {
				uni.chooseMedia({
				  count: 3,
				  mediaType: ['image','video'],
				  sourceType: ['album', 'camera'],
				  maxDuration: 30,
				  camera: 'back',
				  success: (loaclFileRes) =>  {
				    console.log("loaclFileRes.....",loaclFileRes)
					let filepath = loaclFileRes.tempFiles[0]["tempFilePath"] ?? ""
					if (!filepath) {
						uni.showToast({
							title: "文件未读取成功，请重新操作",
							duration: 5000,
							icon:'none'
						})
						return
					}
					//获取到微信头像后马上下载到本地，随后上传到服务器
					uploadFile({
						filepath: filepath,
						formData: {
							subject: "RoomFile"
						}
					}).then(res => {
						console.log("RoomFileUploadFileOk:", res)
						//构建成图片消息发送
						let type = Enum.messageType.image
						if (loaclFileRes.type == "video") {
							type = Enum.messageType.video
						}
						sendMessage({
							"type": type,
							"receiver": 0,
							"roomId": parseInt(this.roomInfo.roomId ?? 0),
							"content": JSON.stringify({
								attachmentId: res.attachmentId ?? 0,
								filepath: res.filepath ?? "",
							}),
						}).then(res => {
							console.log('sendMessageRes',res)
							this.showSelfMessage(res)
							this.form.textMessage = ""
						})
						
					}).catch(f => {
						console.log("RoomFileUploadFileError",f)
					})
				  }
				})
			},
			previewImage(message) {
				//文件类消息处理为json数据
				let data = JSON.parse(message.content)
				var imgArr = [];
				imgArr.push( data.filepath ?? "");
				//预览图片
				uni.previewImage({
					urls: imgArr,
					current: imgArr[0]
				});
			},
			
			// =================== 录音模块 ===================			
			startAudio() {
				console.log('用户开始录音')
				recorderManager.start();
				
				uni.showModal({
					title: '温馨提示',
					content: '正在录音中，点击完成后录音立即发送',
					cancelText: '取消',
					confirmText: '完成',
					success: (res) => {
						if (res.confirm) {
							console.log('用户完成录音',recorderManager);
							recorderManager.stop()
							this.audioIsOk = true
						} else if (res.cancel) {
							console.log('用户取消录音',recorderManager);
							recorderManager.stop();
							this.audioIsOk = false
						}
					}
				});

			},
			audioPlay(content) {
				console.log('播放录音');
				let data = JSON.parse(content)
				if (data.filepath) {
					innerAudioContext.src = data.filepath;
					innerAudioContext.play();
				} else {
					console.log('录入文件不存在')
				}
			},
			// =================== 录音模块 ===================
		}
	}
</script>

<style scoped lang="scss">
	@import "./chat.scss";
</style>