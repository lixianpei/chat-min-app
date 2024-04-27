	import { getWebsocketHost } from './config.js'
	
	//缓存KEY
	const KeyReconnections = "wsReconnections" //重连次数
	const KeyIsCanStart = "wsIsCanStart"//是否可以连接
	const KeyStatus = "wsStatus" //ws的连接状态：1-已连接；null-未连接
	
	export function checkWebsocketStatus() {
		console.log("checkWebsocketStatus")
		setInterval(function(){
			initWebscoket()
		},5*1000)
	}
	
	// 初始化websocket
	export function initWebscoket(){
		console.log("初始化websocket...")
		
		//连接ws
		connection()
		
		uni.onSocketOpen(function (res) {
		  console.log('WebSocket连接已打开！',res);
		  uni.showToast({
		  	title: "ws连接成功",
		  	duration: 2000,
		  	icon:'none'
		  })
		})
		
		uni.onSocketError(function (res) {
		  console.log('WebSocket连接打开失败，请检查！',res)
		  uni.showToast({
		  	title: "ws错误："+res.errMsg,
		  	duration: 5000,
		  	icon:'none'
		  })
		})
		
		let _this = this
		// uni.onSocketMessage(function (res) {
		//   console.log('websocket.js收到服务器内容：' + res.data);
		//   // _this.handleWebsocketData(res.data)
		// })
		
		uni.onSocketClose(function (res) {
		  console.log('WebSocket 已关闭！');
		  uni.removeStorageSync(KeyStatus)
		  uni.showToast({
		  	title: "ws已端口连接："+res.errMsg,
		  	duration: 5000,
		  	icon:'none'
		  })
		});
	}
	
	// 连接websocket
	function connection() {
		if (isCanStartWebsocket() != 1) {
			console.log("暂不允许连接websocket......")
			return
		}
		if (uni.getStorageSync(KeyStatus)) {
			console.log("websocket已连接，无需重复连接")
			return
		}
		if (getWebReconnections() > 3) {
			uni.showModal({
				title: '提示',
				content: '服务已断开连接，是否重新连接？',
				success: function (res) {
					if (res.confirm) {
						resetWebReconnections()
						
						//重连
						connection()
						
						console.log('用户点击确定-重新连接');
						
					} else if (res.cancel) {
						console.log('用户点击取消-重新连接');
					}
				}
			});
			return
		}
		
		//稍等一下
		setTimeout(function(){},2000)
		
		uni.connectSocket({
			url: getWebsocketHost(),
			header: {
				'content-type': 'application/json',
				'token': uni.getStorageSync('token')
			},
			method: 'GET',
			success(res) {
				uni.setStorageSync(KeyStatus,"1")
			},
		});
		addWebReconnections()
	}
	
	// 设置不允许websocket连接
	export function setStoopConnectionWebsocket() {
		return uni.removeStorageSync(KeyIsCanStart)
	}
	
	// 关闭连接
	export function closeWebsocket() {
		uni.removeStorageSync(KeyStatus)
	}
	
	// 开启连接
	export function isCanConnectionWebsocket() {
		uni.setStorageSync(KeyIsCanStart, 1)
	}
	
	// 是否可以连接websocket
	function isCanStartWebsocket() {
		let token = uni.getStorageSync("token") ?? ''
		return token && token.length > 0 ? 1 : 0
		//return uni.getStorageSync(KeyIsCanStart) ?? 0
	}
	
	// 获取重连次数
	function getWebReconnections() {
		return parseInt(uni.getStorageSync(KeyReconnections) ?? 0)
	}
	
	// 累加重连次数
	function addWebReconnections() {
		return uni.setStorageSync(KeyReconnections, getWebReconnections()+1)
	}
	
	// 重置重连次数
	function resetWebReconnections() {
		return uni.setStorageSync(KeyReconnections, 0)
	}