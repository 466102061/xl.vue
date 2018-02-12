<template>
    <ul>
     	<li class="gItem clearfix" v-on:click="detail">
        	<img class="gItemPic" src="../../assets/img/pic_s.png" />
            <div class="gItemText">
            	<h4 class="gTitle"><span>金宝贝国际早教厦门中心</span><img class="gIcoHot" src="../../assets/img/hot.png" /></h4>
                <p class="gAdress">仙岳路4666号万达广场万达百货1层</p>
                <p class="gTime">周二至周日09:00-20:30</p>
                <div class="gSpan">
                	<span>主题活动</span>
                    <span>免费Wifi</span>
                </div>
            </div>
            <a href="##" class="tempHef"></a>
        </li>
    </ul>
</template>

<script>
export default {
	name : 'list',
	methods : {
		detail(){
			this.$router.push('/detail/jigou/1/金宝贝国际早教厦门中心')
		}
	}
}
</script>

<style>
@import '../../assets/css/list.css'
</style>