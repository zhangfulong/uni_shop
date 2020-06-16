<template>
	<view>
		<view class="news_item" v-for="item in list" :key="item.id" @click="navigatorTo(item.id)">
			<image :src="item.img_url" mode=""></image>
			<view class="right">
				<view class="tit">
					{{item.title}}
				</view>
				<view class="info">
					<text>发表时间:{{item.add_time | formatData}}</text>
					<text>浏览量:{{item.click}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['list'],
		filters: {
			formatData(date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2, 0)
				const day = nDate.getDay().toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			}
		},
		methods:{
			navigatorTo(id){
				// 这里触发事件的同时传入id
				this.$emit('itemClick',id)
			}
			
		}
	}
</script>

<style lang="scss">
	.news_item {
		display: flex;
		padding: 10rpx 10rpx;
		border: 1px solid #eee;

		image {
			min-width: 200rpx;
			max-width: 200rpx;
			height: 150rpx;
		}

		.right {
			margin-left: 15rpx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.tit {
				font-size: 30rpx;
			}

			.info {
				font-size: 24rpx;

				text:nth-child(2) {
					margin-left: 30rpx;
				}
			}
		}
	}
</style>
