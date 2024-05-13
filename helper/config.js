// 定义版本信息
const ENV_DEVELOP = "develop";//开发环境
const ENV_TEST = "test";//测试环境
const ENV_TRIAL = "trial";//体验版-预发布
const ENV_RELEASE = "release";//正式版

// 获取小程序版本：develop-开发版；trial-体验版；release-正式版
export function getEnv() {
	let accountInfo = wx.getAccountInfoSync();
	let env = accountInfo.miniProgram.envVersion ?? "develop";
	// env = 'develop'
	env = 'test'
	return env
}

// 获取api请求的host地址
export function getChatApiRequestHost() {
	let env = getEnv()
	switch(env) {
		case ENV_DEVELOP:
			return "http://127.0.0.1:8081"
			case ENV_TEST:
			return "https://lixp.club"
		case ENV_TRIAL:
			return "https://lixp.club"
		case ENV_RELEASE:
			return "https://lixp.club"
	}
}
// 获取websocket请求的host地址
export function getWebsocketHost() {
	let env = getEnv()
	console.log(`env=${env}`)
	switch(env) {
		case ENV_DEVELOP:
			return "ws://127.0.0.1:8081/chat"
			case ENV_TEST:
			return "wss://lixp.club/chat"
		case ENV_TRIAL:
			return "wss://lixp.club/chat"
		case ENV_RELEASE:
			return "wss://lixp.club/chat"
	}
}