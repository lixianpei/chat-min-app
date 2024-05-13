import { getEnv,getChatApiRequestHost } from './config.js'

export function request(config) {
	let host = getChatApiRequestHost()
	let url = host + config.api
	let token = uni.getStorageSync('token')
	let header = {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json;charset=utf-8',
		'token': token
	};
	
	//是否显示加载中
	let loading = config.loading ? config.loading : true;
	
	return new Promise((resolve, reject) => {
		if (loading) {
			uni.showLoading();
		}
		uni.request({
		    url: url,
		    data: config.data,
			method: config.method,
		    header: header,
		    success: ({data: {code, message, data}, errMsg, statusCode}) => {
				// 服务端返回的状态码
				if (code != 200) {
					//api请求成功，但处理返回错误
					uni.showToast({
						title: message,
						duration: 5000,
						icon:'none'
					})
					if (code == 401) {
						console.log('token失效，请重新登录')
						uni.redirectTo({
							url:'/pages/login/login'
						})
					}
					return
				}
				
				resolve(data);
		    },
			fail: (res) => {
				uni.showToast({
					title: ('请求发生错误：' + (res.errMsg||'error')),
					duration: 5000,
					icon: 'none',
				})
				reject(res);
			},
			complete: ({data: {code, message, data}, errMsg, statusCode}) => {
				if (loading) {
					uni.hideLoading();
				}
				switch(statusCode) {
					case 500:
						uni.showToast({
							title: '服务器异常',
							duration: 5000,
							icon: 'none',
						})
						break;
					case 404:
						uni.showToast({
							title: '未知请求',
							duration: 5000,
							icon: 'none',
						})
						break
					case 403:
						uni.showToast({
							title: '无权访问',
							duration: 5000,
							icon: 'none',
						})
						break
				}
			}
		});
	});
}

// uploadSingleFile 微信小程序只支持单文件上传
export function uploadSingleFile(config) {
	let host = getChatApiRequestHost()
	let url = host + config.api
	let token = uni.getStorageSync('token') ?? ''
	let header = {
		'Content-Type': 'multipart/form-data',
		'token': token
	};
	
	//是否显示加载中
	let loading = config.loading ? config.loading : true;
	
	return new Promise((resolve, reject) => {
		if (loading) {
			uni.showLoading();
		}
		uni.uploadFile({
		    url: url,
			name: 'file',
		    filePath: config.filepath,
			formData: config.formData ?? {},
			method: "POST",
		    header: header,
		    success: (res) => {
				let resData	= JSON.parse(res.data)
				// 服务端返回的状态码
				if (resData.code != 200) {
					//api请求成功，但处理返回错误
					uni.showToast({
						title: resData.message,
						duration: 5000,
						icon:'none'
					})
				}
				resolve(resData.data);
		    },
			fail: (res) => {
				uni.showToast({
					title: ('请求发生错误：' + (res.errMsg||'error')),
					duration: 5000,
					icon: 'none',
				})
				reject(res);
			},
			complete: (res) => {
				let statusCode	= res.statusCode
				if (loading) {
					uni.hideLoading();
				}
				switch(statusCode) {
					case 500:
						uni.showToast({
							title: '服务器异常',
							duration: 5000,
							icon: 'none',
						})
						break;
					case 404:
						uni.showToast({
							title: '未知请求',
							duration: 5000,
							icon: 'none',
						})
						break
					case 403:
						uni.showToast({
							title: '无权访问',
							duration: 5000,
							icon: 'none',
						})
						break
				}
			}
		});
	});
}
