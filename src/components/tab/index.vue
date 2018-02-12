<template>
<ul class="clearfix mbody">
   <li class="item tabItem" v-for="(item,index) in tab"><span v-on:click="tabClick(index)" v-bind:class="index == curKey ? 'cur' : '' ">{{item}}</span></li>
</ul>
</template>

<script>
export default {
	name : 'tab',
	props : ['curIndex','tab','tabClicked'],
	methods : {
		tabClick (index){
			this.curKey = index
			this.tabClicked(index)
		}
	},
	data(){
		return {
			curKey : this.curIndex
		}
	}
}
</script>

<style>
@import '../../assets/css/tab.css'
</style>