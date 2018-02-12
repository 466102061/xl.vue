
/****
***以下是koa1.0版本的写法
*****/

const app = require('koa')()
const router =  require('koa-router')()

//设置跨域请求
const cors = require('koa-cors')
app.use(cors())

const category = require('../datasource/category')
router.get('/api/category',function *(next){
	this.body = category
})

//获取我的页面中tab列表
const products = require('../datasource/products')
router.get('/api/products', function *(next){
	this.body = products
})

// router.post('url',function *(next){
// 	//获取参数
// 	this.body = {
// 		errno : 0,
// 		msg : 'ok'
// 	}
// });
// response.setHeader("Access-Control-Allow-Origin", "*")
//开始服务并生成路由\
app.use(router.routes())
	.use(router.allowedMethods());
app.listen(8090);