<template>
	<view class="contact">
		<image src="https://inews.gtimg.com/newsapp_bt/0/11936982169/1000" mode="" class="img"></image>
		<view class="info">
			<view class="" @click="phone">
				联系电话：911
			</view>
			<view class="">
				地址：国际航运金融大厦坐落于浦东新区陆家嘴金融贸易区
			</view>
			<map name="" class="map" :longitude="longitude" :scale="scale" :latitude="latitude" :markers="markers"></map>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				longitude:121.513114,
				latitude:31.315048,
				scale:14,
				markers:[
					{
						longitude:121.513114,
						latitude:31.315048,
						iconPath:'../../static/logo.png',
						width:30,
						height:30,
						label:{
							content:"bilibili",
							fontSize:14,
							color:'#FF0000'
						}
						
					}
				]
			}
		},
		methods: {
			phone(){
				uni.makePhoneCall({
					phoneNumber:'911'
				})
			}
		}
	}
</script>

<style lang="scss">
.contact{
	.img{
		width: 750rpx;
	}
	.info{
		padding: 10rpx 0;
		font-size: 30rpx;
		view{
			line-height: 60rpx;
			border: 1px solid #eee;
		}
		.map{
			margin:0 10rpx;
			height: 740rpx;
			width: 97%;
		}
	}
}
</style>
