<template>
<div>
	<div class="mbody topBlock">
		<div class="topTag">分类</div>
		<topBtns v-bind:curIndex="curBtnIndex" v-bind:getCategory="getCategory" v-bind:topBtnClick="topBtnClick" />
	</div>
	<!--组件引入：<tab /> 或者<tab></tab>-->
	<tab v-bind:tab="tab" v-bind:curIndex="curTabIndex" v-bind:tabClicked="tabClick" />
	<div class="mbody">
		<item v-if="index == 0" v-bind:items="getProducts" />
		<list v-else-if="index == 1" />
	</div>
</div>
</template>

<script>
import {
	mapGetters,
	mapState,
	mapActions
} from 'vuex'
import topBtns from '../../components/topBtns'
import tab from '../../components/tab'
import list from '../../components/list'
import item from '../../components/item'
import category from '../../datasource/category'
export default {
	name : 'index',
	components : {
		topBtns,
		tab,
		list,
		item
	},
	computed : {
		//缓存，只有当属性发生变化的时候，才会重新计算
		//计算属性,计算任何复杂逻辑的属性
		//anyAttribute : function(){ return ...}
		...mapGetters([
			'getCategory',
			'getProducts'
		])
	},
	methods : {
		...mapActions([
			'setCategory',
			'setProducts'
		]),
		topBtnClick(index){
			console.log('topBtn分类收到子组件回传参数index：'+index)
		},
		tabClick(index){
			this.index = index;
			console.log('tab接收到子组件回传参数：'+index)
		}
	},
	watch : {
		//侦听属性变化，来响应数据的变化。
		//当需要在数据变化时执行异步或开销较大的操作时使用
		//attrubute : function(){// 如果 `attrubute` 发生改变，这个函数就会运行}
	},
	created (){
		console.log('组件被创建...')
	},
	//created : function(){
	//	//这种写法也行,即属性的写法
	//},
	mounted (){
		//设置vuex-store数据
        const url = 'http://localhost:8090/api/category'
        const url2 = 'http://localhost:8090/api/products'
		this.setCategory(url)
		this.setProducts(url2)
		//console.log('组件加载完成...')
	},
	updated (){
		//console.log('组件更新...')
	},
	destroyed (){
		//console.log('组件被销毁...')
	},
    beforeRouteUpdate (to, from, next){
    	//console.log('loading...'+this.$route.name)
       // next();
    },
	data (){
		return{
			index : 0,
			curBtnIndex : 9,
			curTabIndex : 0,
			tab:['活动推荐','机构大全']
		}
	}

}
</script>

<style>
@import "../../assets/css/home.css";
</style>