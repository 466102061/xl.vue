

//对象转换成字符串
export function objToString (obj) {
	let result = ''
	for (let item in obj){
		result += '&' + item + '=' + encodeURIComponent(obj)
	}
	if(result){
		result = result.slice(1)
	}
	return result
}