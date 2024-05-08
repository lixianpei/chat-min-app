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


export function searchUser(data) {
	return request({
		api: '/api/im/searchUser',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function userDetail(data) {
	return request({
		api: '/api/im/userDetail',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function addFriend(data) {
	return request({
		api: '/api/im/addFriend',
		method: 'POST',
		loading: true,
		data: data
	});
}
export function getFriendContact(data) {
	return request({
		api: '/api/im/getFriendContact',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function getRoomList(data) {
	return request({
		api: '/api/im/getRoomList',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function setMessageReadStatus(data) {
	return request({
		api: '/api/im/setMessageReadStatus',
		method: 'POST',
		loading: true,
		data: data
	});
}

export function getMessageList(data) {
	return request({
		api: '/api/im/getMessageList',
		method: 'POST',
		loading: true,
		data: data
	})
}