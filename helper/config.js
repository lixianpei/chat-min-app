// 定义版本信息
const ENV_DEVELOP = "develop";//开发环境
const ENV_TRIAL = "trial";//体验版-预发布
const ENV_RELEASE = "release";//正式版

// 获取小程序版本：develop-开发版；trial-体验版；release-正式版
export function getEnv() {
	let accountInfo = wx.getAccountInfoSync();
	return accountInfo.miniProgram.envVersion ?? "develop";
}

// 获取api请求的host地址
export function getChatApiRequestHost() {
	let env = getEnv()
	console.log(`env=${env}`)
	switch(env) {
		case ENV_DEVELOP:
			return "http://127.0.0.1:8080"
		case ENV_TRIAL:
			return "https://chat-pre.lixianpei.com/api"
		case ENV_RELEASE:
			return "https://chat.lixianpei.com/api"
	}
}