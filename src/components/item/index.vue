<template>
     <ul class="clearfix tItemWrap">
         <li class="tItem" v-for="(item,index) in datas">
         	<router-link v-bind:to="'/detail/houdong/'+index+'/'+item.title">
         	<div class="tItemIner">
                <div class="picWindow">
                	<img v-bind:src="item.img" />
                   <!-- 售空-->
                   <div class="tSoldOut" v-if="item.statu == 'offline'">
                   		<div class="bg"></div>
                  		<span class="icoSoldOut"></span>
                   </div>
                </div>
                <p class="proDesc">{{item.title}}</p>
                <div class="tPrice"> 
                    <span class="unt">￥</span>
                    <b class="curPrice">{{item.nPrice}}</b>
                    <span class="prePrice">￥{{item.oPrice}}</span>
                </div>
                <span class="tPan" v-if="item.statu == 'online'"></span>
                <a v-bind:href="item.url" class="tempHef"></a>
            </div>
            </router-link>
         </li>
    </ul>
</template>

<script>
//img url : require('....')
import products from '../../datasource/list.js'
export default {
	name : 'item',
	props : ['items'],
	data (){
		return {
			datas : products
		}
	}
}
</script>

<style>
@import '../../assets/css/item.css'
</style>