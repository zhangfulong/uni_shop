<template>
	<view class="good_list">
		<goodsList :goods="goodss"></goodsList>
	</view>
</template>

<script>
	import goodsList from '../../components/goods-list/goods-list.vue';
	export default {
		props: ['goods'],
		data() {
			return {
				pageIndex: 1,
				goodss:[]
			}
		},
		onLoad() {
			this.getGoodsList()
		},
		methods: {
			// 获取商品列表的数据

			async getGoodsList() {
				const res = await this.$myRequest({
					url: '/api/getgoods?pageindex=' + this.pageIndex
				})
				this.goodss = res.data.message
			}
		},
		components: {
			goodsList
		}
	}
</script>

<style lang="scss">
.goods_list{
	background: #eee;
}
</style>
