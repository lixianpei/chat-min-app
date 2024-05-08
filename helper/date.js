
export function formatDatetime(dateString) {
	// 输入的日期字符串
	// let dateString = "2024-05-01 22:08:43";
	
	// 分割日期字符串
	let parts = dateString.split(/[\s:-]/);
	
	// 创建日期对象
	let date = new Date(parts[0], parts[1] - 1, parts[2], parts[3], parts[4], parts[5]);
	
	return date
}

export function getDatetime() {
	return  formatDate(new Date())
}
// 格式化时间函数
function formatDate(date) {
	const year = date.getFullYear();
	const month = padZero(date.getMonth() + 1);
	const day = padZero(date.getDate());
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	const seconds = padZero(date.getSeconds());

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// 补零函数，用于补齐小于10的数字
function padZero(num) {
	return num < 10 ? '0' + num : num;
}