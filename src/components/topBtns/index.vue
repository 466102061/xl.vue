<template>
    <ul class="clearfix topBtn">
    	<li v-for="(tab, index) in getCategory" v-bind:class="index==curKey?'cur':''" v-on:click="tabClick(index)"><span>{{tab}}</span></li>
    </ul>
</template>

<script>
export default {
	props : ['curIndex','getCategory','topBtnClick'],
	methods : {
		tabClick (index){
			this.curKey = index;
			this.topBtnClick(index);
			//js 路由跳转
			//this.$router.push('/detail/type=jigou&id=0')
		}
	},
	data (){
		return {
			curKey : this.curIndex
		}
	}
}
</script>

<style>
@import "../../assets/css/topBtn.css"
</style>