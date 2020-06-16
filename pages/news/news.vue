<template>
	<view class="news">
		<newsItem :list="newsList" @click="goToDetail" @itemClick="goToDetail"></newsItem>
	</view>
</template>

<script>
	import newsItem from '../../components/news-item/news-item'
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components: {
			newsItem
		},
		methods: {
			async getNews() {
				const res = await this.$myRequest({
					url: '/api/getnewslist'
				})
				this.newsList = res.data.message
			},
			// 点击后跳转到相应页面
			goToDetail(id) {
				uni.navigateTo({
					url: '/pages/news-detail/news-detail?id='+id
				})
			}
		},
		onLoad() {
			this.getNews()
		}
	}
</script>

<style lang="scss">
	.news {}
</style>
