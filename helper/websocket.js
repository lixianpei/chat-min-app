	import { getWebsocketHost } from './config.js'
	
	//缓存KEY
	const KeyReconnections = "wsReconnections" //重连次数
	const KeyIsCanStart = "wsIsCanStart"//是否可以连接
	const KeyStatus = "wsStatus" //ws的连接状态：1-已连接；null-未连接
	
	let websocket;
	let reconnectCount = 0;
	const maxReconnectAttempts = 3;
	const reconnectDelay = 5000; // 5秒重连间隔
	
	export function connectWebSocket() {
		// if (uni.getStorageSync(KeyStatus)) {
		// 	console.log('websocket 已连接，无需重复连接')
		// 	return
		// }
        console.log('连接 WebSocket...');
	    uni.connectSocket({
			url: getWebsocketHost(),
			header: {
				'content-type': 'application/json',
				'token': uni.getStorageSync('token')
			},
			method: 'GET',
			success(res) {
			},
			complete() {
				addReconnections()
			}
		})
	
	    // 连接成功处理
	    uni.onSocketOpen(function (res) {
			console.log('WebSocket连接已打开！',res);
			uni.setStorageSync(KeyStatus, 1)//ws连接状态修改：已关闭
			uni.showToast({
				title: "ws连接成功",
				duration: 2000,
				icon:'none'
			})
			
			resetReconnections(); // 重置重连计数

			//开始心跳检测
			//startHeartbeat()
		})
	
	    // 连接关闭处理
		uni.onSocketClose(function (res) {
			uni.showModal({
				title: '提示',
				content: 'WebSocket 连接已经断开，是否尝试重新连接？',
				success: function (res) {
					if (res.confirm) {
						//重连
						connectWebSocket()
						
						console.log('用户点击确定-重新连接');
						
					} else if (res.cancel) {
						console.log('用户点击取消-重新连接');
						//uni.redirectTo({
						//	url:'/pages/login/login'
						//})
					}
				}
			});
		});
	
	    // 错误处理
		uni.onSocketError(function (res) {
			console.log('WebSocket连接打开失败，请检查！',res)
			uni.showToast({
				title: "ws错误："+res.errMsg,
				duration: 5000,
				icon:'none'
			})
		})
	}
	
	// 发送心跳消息
	function sendHeartbeat() {
		console.log('发送心跳消息');
		uni.sendSocketMessage({
			data: 'ping'
		});
	}
	
	// 开始心跳检测
	function startHeartbeat() {
		setInterval(sendHeartbeat, 5000); // 每5秒发送一次心跳消息
	}

	
	// 获取重连次数
	function getReconnections() {
		const v = uni.getStorageSync(KeyReconnections)
		if (v) {
			return parseInt(v)
		}
		return 0
	}
	
	// 累加重连次数
	function addReconnections() {
		return uni.setStorageSync(KeyReconnections, getReconnections()+1)
	}
	
	// 重置重连次数
	function resetReconnections() {
		return uni.setStorageSync(KeyReconnections, 0)
	}