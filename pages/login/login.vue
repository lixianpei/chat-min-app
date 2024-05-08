<template>
  <view class="login-container">
    <view class="login-form">
      <form @submit.prevent="login">
        <div class="" style="text-align: center;">
			<button
				class="avatar-button" 
				open-type="chooseAvatar"
				@chooseavatar="chooseavatar"
			>
				<image class="avatar" :src="avatarUrl"></image>
			</button>
        </div>
        <div class="form-group">
          <input type="number" v-model="phone" placeholder="手机号" required>
        </div>
        <div class="form-group">
          <input type="nickname" v-model="nickname" @change="getNickname" placeholder="请输入昵称" class="weui-input" required>
        </div>
		
		<button type="primary" :disabled="submitDisabled" class="login-button" form-type="submit" @click="onPhoneLogin()">登录</button>
      </form>
    </view>
  </view>
</template>

<script>
import { login, wxUserSave, userInfoSave, uploadFile, phoneLogin } from '../../api/api'
import { connectWebSocket } from '../../helper/websocket'
export default {
    data() {
		return {
			phone: '18083198680',
			nickname: 'Lixp',
			avatar: '',
			avatarUrl: "../../static/dog-avatar.webp",
			defaultAvatarUrl: "../../static/dog-avatar.webp",
			loading: false,
		};
    },
	computed: {
		submitDisabled() {
			if (this.loading) {
				return true //不允許點擊
			} else if (this.phone.length == 0 || this.nickname.length == 0) {
				return true//不允許點擊
			}
			return false
		}
	},
	onLoad() {
		this.wxAutoLogin()
	},
	mounted() {
	},
	methods: {
		login() {
		  
		},
		wxAutoLogin() {
			let _this = this
			uni.login({
				"provider": "weixin",
				"onlyAuthorize": true, // 微信登录仅请求授权认证
				success: function(event){
					const {code} = event
					login({code: code}).then(res => {
						//登录成功后把token设置缓存中
						if (res.userInfo.avatar) {
							_this.avatarUrl = res.avatarUrl
							_this.avatar = res.userInfo.avatar //必须取外部的_this，要不然数据无法更新
							uni.setStorageSync("avatar",res.userInfo.avatar)
						}
						uni.setStorageSync("userInfo",res.userInfo)
						uni.setStorageSync("token",res.token)
						uni.setStorageSync("userId",res.userId)
					}).catch(err => {
						console.log(err)
					})
				},
				fail: function (err) {
					// 登录授权失败
					// err.code是错误码
				}
			})
		},
		onPhoneLogin() {
			if (this.loading == true) {
				uni.showToast({
					title: "请勿重复点击",
					duration: 3000,
					icon:'none'
				})
				return
			}
			if (!this.avatar) {
				uni.showToast({
					title: "请选择头像信息",
					duration: 3000,
					icon:'none'
				})
				return
			}
			if (this.phone.length == 0 || this.nickname.length == 0) {
				uni.showToast({
					title: "请输入信息",
					duration: 3000,
					icon:'none'
				})
				return
			}
			this.loading = true
			phoneLogin({
				"phone": this.phone,
				"nickname": this.nickname,
				"avatar": this.avatar,
			}).then(res => {
				//登录成功后把token设置缓存中
				uni.setStorageSync("token",res.token)
				uni.setStorageSync("userId",res.userId)
				uni.setStorageSync("avatar",this.avatarUrl)
				uni.showToast({
					title: "登录成功",
					duration: 5000,
					icon:'none'
				})
				
				//ws连接
				//connectWebSocket()
				connectWebSocket() 
				
				setTimeout(() => {
					// uni.redirectTo({
					// 	url:'/pages/chat/chat'
					// })
					uni.switchTab({
						url:'/pages/chat/list'
					})
					this.loading = false
				},2000)
				
			}).catch(err => {
				console.log(err)
			})
		},
		chooseavatar(e) {
			console.log(e)
			let avatar = e.detail.avatarUrl ?? ''

			//获取到微信头像后马上下载到本地，随后上传到服务器
			uploadFile(avatar).then(res => {
				console.log("uploadFileOk:", res)
				//设置本地头像信息
				this.avatarUrl = res.url
				this.avatar = res.filepath
				console.log(this.avatarUrl)
				
			}).catch(f => {
				console.log("uploadFileError",f)
			})
		},
		getNickname(e) {
			console.log("getNickname...",e)
			if (e.detail.value) {
				//由于选择的昵称不能直接自动绑定model，因此需要手动更新model
				this.nickname = e.detail.value	
			}
		},
    }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: linear-gradient(135deg, #1e5799, #7db9e8); */
  background-color: white;
}

.login-form {
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 95%;
  padding: 15rpx;
  border: 1px solid #ccc;
  border-radius: 5px;
}

login-button {
  width: 100%;
  /* padding: 12px; */
  border: none;
  border-radius: 5px;
  background-color: #1a7f64;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

login-button:hover {
  background-color: #135a47;
}

login-button:active {
  background-color: #0e3c2f;
}
.avatar {
	width: 100rpx;
	height: 100rpx;
	border-radius: 50%;
	background-color: #1aad19;
}
.avatar-button {
	background: none !important; /* 移除按钮默认的背景色 */
	border: none !important; /* 移除按钮默认的边框 */
	padding: 0; /* 移除按钮内边距 */
	outline: none; /* 移除按钮获得焦点时的边框样式 */
}
.avatar-button::after {
	content: none !important;
}
</style>
