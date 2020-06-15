<template>
	<view class="home">
		<swiper indicator-dots>
			<swiper-item v-for="(item,id) in swipers" :key="id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item">
				<view class="iconfont icon-shipin"></view>
				<text>超市</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-tupian"></view>
				<text>图片</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-ziyuan"></view>
				<text>资源</text>
			</view>
			<view class="nav_item">
				<view class="iconfont icon-guanyuwomen"></view>
				<text>About</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swipers: [],
			}
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			}
		}
	}
</script>

<style lang="scss">
	.home {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

	}
	.nav{
		display: flex;
		.nav_item{
			width: 25%;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background: #b50e03;
				border-radius: 60rpx;
				margin: 10rpx auto;
				line-height: 120rpx;
				color: #fff;
				font-size:50rpx; 
			}
			.icon{
				font-size:45rpx;
			}
			text{
				font-size: 30rpx;
				
			}
		}
	}
</style>
