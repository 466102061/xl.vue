import 'whatwg-fetch'
import 'es6-promise'
import 'whatwg-fetch'
import 'es6-promise'

import objToString from '../util/objToString'


export function post (url, paraObj){
	const result = fetch(url, {
		method : 'POST',
		// credentials : 'include',
		headers : {
			'Accept' : 'application/json, text/plain, */*',
			'Content-Type' : 'application/x-www-form-rulencoded'
		},
		body : objToString(paraObj)
	})
	return result
}