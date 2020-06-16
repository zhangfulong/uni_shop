<template>
	<view class="goods_detail">
		<swiper indicator-dots>
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>￥{{info.sell_price}}</text>
				<text>￥{{info.market_price}}</text>
			</view>
			<view class="goods_name">
				{{info.title}}
			</view>
			<view class="line"></view>
		</view>
		<view class="box2">
			<view>货号:{{info.goods_no}}</view>
			<view>库存:{{info.stock_quantity}}</view>
			<view class="line"></view>
		</view>
		<view class="box3">
			<view class="tit">
				{{title}}
			</view>
			<view class="content">
				<rich-text :nodes="content"></rich-text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				swipers: [],
				info: {},
				title: '',
				content: '',
				
			}
		},
		components: {
			
		},
		methods: {
			// 获取轮播图数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: '/api/getthumimages/' + this.id
				})
				this.swipers = res.data.message
			},
			
			// 获取详情页其他数据
			async getDetailInfo() {
				const res = await this.$myRequest({
					url: '/api/goods/getinfo/' + this.id
				})
				this.info = res.data.message[0]
			},
			// 获取详情介绍
			async getDetailContent() {
				const res = await this.$myRequest({
					url: '/api/goods/getdesc/' + this.id
				})
				this.title = res.data.message[0].title
				this.content = res.data.message[0].content
			},
			
		},
		onLoad(options) {
			this.id = options.id
			this.getSwipers()
			this.getDetailInfo()
			this.getDetailContent()
		}
	}
</script>

<style lang="scss">
	.goods_detail {
		swiper {
			height: 700rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.box1 {
			padding: 10rpx;

			.price {
				font-size: 36rpx;
				color: $shop-color;
				line-height: 80rpx;

				text:nth-child(2) {
					color: #ccc;
					font-size: 28rpx;
					margin-left: 10rpx;
					text-decoration: line-through;
				}
			}

			.goods_name {
				font-size: 32rpx;
				line-height: 60rpx;
			}

		}

		.box2 {
			padding: 0 10rpx;
			font-size: 28rpx;
			line-height: 60rpx;
		}

		.box3 {
			.tit {
				font-size: 30rpx;
				padding-left: 10rpx;
				border-bottom: 1px solid #ccc;
				line-height: 70rpx;
			}

			.content {
				padding: 10rpx;
				font-size: 26rpx;
				color: #333;
				line-height: 50rpx;

				.gomeImgLoad {
					width: 100%;
					height: auto;
				}
			}
		}
	}

	.line {
		height: 15rpx;
		width: 750rpx;
		background: #eee;

	}
</style>
