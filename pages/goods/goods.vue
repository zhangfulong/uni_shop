<template>
	<view class="good_list">
		<goodsList :goods="goodss" @goodsItemClick="goDetail"></goodsList>
		<view class="isover" v-if="flag">
			------我是有底线的------
		</view>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue';
	export default {
		props: ['goods'],
		data() {
			return {
				pageIndex: 1,
				goodss: [],
				flag: false
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表的数据
			async getGoodsList(callback) {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageIndex
				})
				this.goodss = [...this.goodss, ...res.data.message]
				callback && callback()
			},
			// 点击后跳转详情页
			goDetail(id) {
				uni.navigateTo({
					url: '/pages/goods-detail/goods-detail?id=' + id
				})
			}
		},
		components: {
			goodsList
		},
		// 底部加载新数据
		onReachBottom() {
			if (this.goodss.length < this.pageIndex * 10) return this.flag = true
			console.log('bottom');
			this.pageIndex++
			this.getGoodsList()
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.pageIndex = 1;
			this.goodss = []
			this.flag = false
			setTimeout(() => {
				this.getGoodsList(() => uni.stopPullDownRefresh())
			}, 1000)
		}
	}
</script>

<style lang="scss">
	.goods_list {
		background: #eee;
	}

	.isover {
		width: 100%;
		height: 100rpx;
		line-height: 100rpx;
		text-align: center;
		font-size: 28rpx;
	}
</style>
