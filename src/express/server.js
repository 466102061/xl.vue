const express = require('express')
const http = require('http')
const app = express()


//设置跨域请求
app.all('*', function(req, res, next) { 
	res.header("Access-Control-Allow-Origin", "*")
	next()
})

const category = require('../datasource/category')
app.get('/api/category', function(req, res) {
  res.send(category)
})

const products = require('../datasource/products')
app.get('/api/products', function (req, res) {
	res.send(products)
})

//jsonp-请求，设置回调函数
app.get('/api/jsonp', function (req, res) {
	var _callback = req.query.callback
	 var _data = products
	 if (_callback){
	   res.type('text/javascript');
	   res.send(_callback + '(' + JSON.stringify(_data) + ')')
	 }
	 else{
	   res.send(_data)
	 }
})

http.createServer(app).listen(8090)