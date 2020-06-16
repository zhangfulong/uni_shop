<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view @click="leftClickHandle(index,item.id)" :class="active===index?'active':''" v-for="(item,index) in cates" :key="item.id">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view scroll-y class="right">
			<view class="item-right" v-for="item in secondData" :key="item.id">
				<image @click="previewImg(item.img_url)" :src="item.img_url" mode=""></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="secondData.length===0" class="other">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				active: 0,
				secondData: []
			}
		},
		onLoad() {
			this.getPicsCate()

		},
		methods: {
			async getPicsCate() {
				const res = await this.$myRequest({
					url: '/api/getimgcategory'
				})
				this.cates = res.data.message
				this.leftClickHandle(0, this.cates[0].id)
			},
			async leftClickHandle(index, id) {
				this.active = index
				// 获取右边数据
				const res = await this.$myRequest({
					url: '/api/getimages/' + id
				})
				this.secondData = res.data.message
			},
			previewImg(current){
				const urls = this.secondData.map(item=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
		},

	}
</script>

<style lang="scss">
	page {
		height: 100%
	}

	.pics {
		height: 100%;
		display: flex;
		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 120rpx;
				line-height: 120rpx;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}

			.active {
				background: $shop-color;
				color: #fff;
			}
		}

		.right {
			height: 100%;
			width: 530rpx;
			margin: 10rpx auto;

			.item-right {
				image {
					width: 530rpx;
					height: 530rpx;
					border-radius: 10rpx;
				}

				text {
					font-size: 28rpx;
					line-height: 60rpx;
				}
			}
			.other{
				font-size: 30rpx;
			}
		}

	}
</style>
