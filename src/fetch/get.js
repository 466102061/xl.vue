import 'whatwg-fetch'
import 'es6-promise'

export function get (url) {
	const result = fetch(url, {
		// mode: "cors",
		// credentials : 'include',
		headers : {
			'Accept' : 'application/json, text/plain, */*'
		}
	})
	return result
	console.log(result)
}

		// mode: "no-cors",
		// credentials : 'include',
//http://m.toutiao.com/list/?tag=' + pay.kind + '&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=' + parseInt((new Date().getTime()) / 1000)
//
//kind:__all__
// actions.js?9946:15 kind:news_hot
// actions.js?9946:15 kind:news_society
// actions.js?9946:15 kind:news_tech
// actions.js?9946:15 kind:news_entertainment
// actions.js?9946:15 kind:news_car
// actions.js?9946:15 kind:news_sports
// actions.js?9946:15 kind:news_finance
// 1510901677139
// 1510901677
// 
// http://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=1510901677