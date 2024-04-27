import { request, uploadSingleFile } from '../helper/request.js'

export function login(data) {
	return request({
		api: '/api/im/login',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function phoneLogin(data) {
	return request({
		api: '/api/im/phoneLogin',
		method: 'POST',
		loading: true,
		data: data
	});
}


export function wxUserSave(data) {
	return request({
		api: '/api/im/wxUserSave',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function userInfoSave(data) {
	return request({
		api: '/api/im/userInfoSave',
		method: 'POST',
		loading: true,
		data: data
	});
}


export function uploadFile(filepath) {
	return uploadSingleFile({
		api: '/api/im/upload',
		method: 'POST',
		loading: true,
		filepath: filepath
	});
}