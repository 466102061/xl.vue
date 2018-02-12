<template>
  <div class="mbody">
  	<div class="topBar"><span class="back" v-on:click="backClick()"></span></div>
    <h1>{{ title }}</h1>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
import { get } from '../../fetch/get'
import jsonp from 'jsonp'
export default {
  name: 'detail',
  data () {
    return {
      title: '产品详情',
      msg : ''
    }
  },
  computed : {
      ...mapGetters([
          'getProducts',
          'getCategory'
      ])
  },
  methods : {
      ...mapActions([
          'setProducts',
          'setCategory'
      ]),
      backClick(){
        this.$router.replace('/');
       // window.history.go(-1);
      }
  },
  mounted : function (){
    this.msg = this.$route.params.title;//从路由参数中获取值
    //  const url = 'http://localhost:8090/api/category'
    //  const jsonpUrl = 'http://m.toutiao.com/list/?tag=__all__&ac=wap&count=20&format=json_raw&as=A125A8CEDCF8987&cp=58EC18F948F79E1&min_behot_time=1510901677'
    //  const result = get(url)
    //  console.log(result)
    //  result.then(res =>{
    //      return res.json()
    //  }).then(json =>{
    //      console.log(json)
    //  }).catch(ex =>{
     //     console.log(ex.message)
     // })
      //jsonp-请求跨域资源
     // jsonp(jsonpUrl, function(err, res){
     //     console.log('jsonp今日头条：'+res)
     // })
      //jsonp-请求本地夸端口请求-资源需设置url回调函数
     // jsonp('http://localhost:8090/api/jsonp', function(err, res){
     //     console.log('jsonp结果：'+res)
    //  })
    //  this.setProducts(url)
      //
      //console.log('路由query:'+this.$route.query)
      //console.log('路由fullPath:'+this.$route.fullPath)
     // console.log('路由path:'+this.$route.path)
     // console.log('路由参数id:'+this.$route.params.id)
  }
}
</script>

<style scoped>
h1, h2 {
	text-align:center;
	padding:40px;
}
.mbody{
  width:100%;
  height:40px;
  max-width:487px;
  margin:0 auto;
}
.topBar{
	position:relative;
	width:100%;
	height:40px;
	border-bottom:1px solid #ddd;
}
.topBar .back{
	display:block;
	position:absolute;
	width:16px;
	height:16px;
	left:10px;
	top:50%;
	margin-top:-8px;
	cursor:pointer;
	border-left:2px solid #000;
	border-bottom:2px solid #000;
	transform: rotate(45deg);
	-webkit-transform: rotate(45deg);
}
</style>
