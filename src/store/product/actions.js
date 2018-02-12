import {
	PRODUCT_LIST,
	PRODUCT_CATEGORY
} from './mutationType'
import { get } from '../../fetch/get'
import debug from '../../config/debug'

export function setProducts ({commit}, url) {
	// const result = get('http://localhost:8090/api/category')
	const result = get(url)
	console.log('actions')
	result.then(res => {
		return res.json()
	}).then(json => {
		commit(PRODUCT_LIST, json)
	}).catch(ex => {
		if(debug){
			console.log('产品列表获取失败！'+ex.message)
		}
	})
}

export function setCategory ({commit}, url) {
	const result = get(url)
	result.then(res => {
		return res.json()
	}).then(json => {
		commit(PRODUCT_CATEGORY, json)
	}).catch(ex => {
		if(debug){
			console.log('产品分类获取失败！' + ex.message)
		}
	})
}
