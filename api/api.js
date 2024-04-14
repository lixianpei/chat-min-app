import { request } from '../helper/request.js'

export function ping() {
	return request({
		api: '/ping',
		method: 'get',
		loading: true,
	});
}