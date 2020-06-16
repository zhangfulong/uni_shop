<template>
	<view class="home">
		<swiper indicator-dots>
			<swiper-item v-for="(item,id) in swipers" :key="id">
				<image :src="item.img" mode=""></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item,index) in navs" :key="index" @click="navItemClick(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</view>
		</view>
		<!-- 推荐商品区域 -->
		<view class="hot_goods">
			<view class="tit">
				推荐商品
			</view>
			<goodList :goods="goods"></goodList>
		</view>
	</view>
</template>

<script>
	import goodList from '../../components/goods-list/goods-list'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [{
						icon: 'iconfont icon-ziyuan',
						title: '商城',
						path: '/pages/goods/goods'
					},
					{
						icon: 'iconfont icon-tupian',
						title: '图片',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-shipin',
						title: '资源',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						title: '关于我们',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		components: {
			goodList
		},
		onLoad() {
			this.getSwipers()
			this.getHotGoods()
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getlunbo'
				})
				this.swipers = res.data.message
			},
			// 获取热门商品列表数据
			async getHotGoods() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=1'
				})
				this.goods = res.data.message
			},
			// 点击icon传送到对应页面
			navItemClick(url) {
				uni.navigateTo({
					url
				})
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

		// nav 
		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				view {
					width: 120rpx;
					height: 120rpx;
					background: $shop-color;
					border-radius: 60rpx;
					margin: 10rpx auto;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
				}

				.icon {
					font-size: 45rpx;
				}

				text {
					font-size: 30rpx;

				}
			}
		}


		// hot_goods
		.hot_goods {
			background: #eee;
			overflow: hidden;
			margin-top: 10rpx;

			.tit {
				height: 100rpx;
				line-height: 100rpx;
				color: $shop-color;
				text-align: center;
				letter-spacing: 40rpx;
				background: #fff;
				margin: 7rpx 0;
			}
		}

	}
</style>
