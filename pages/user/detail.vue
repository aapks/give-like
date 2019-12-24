<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">明细</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in navArr" :key="item.id" @tap="tabSelect"
			 :data-id="index">
				{{item.title}}
			</view>
		</scroll-view>
		<view class="padding">
        <button class="cu-btn sm margin-right-sm bg-orange">本日</button>
        <button class="cu-btn sm margin-right-sm">本月</button>
        <button class="cu-btn sm">本年</button>
      </view>
		<view class="cu-list menu">
			<view class="cu-item" v-for="(item, index) in 5" :key="index">
				<view class="content">
					<view class="text-grey"><text class="text-black">接单收益</text>  <text class="margin-left-sm text-sm">抖音  xxxx  关注/点赞</text></view>
					<view class="text-sm text-gray">2019-12-20 12:20</view>
				</view>
				<view class="action">
					<text class="text-bold">+1.00</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navArr: [{
					id: 1,
					title: '全部'
				}, {
					id: 2,
					title: '接单收益'
				}, {
					id: 3,
					title: '直推收益'
				}, {
					id: 4,
					title: '间推收益'
				}, {
					id: 5,
					title: '充值记录'
				}],
				TabCur: 0,
				scrollLeft: 0
			};
		},
		methods: {
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60
			}
		}
	}
</script>

<style lang="scss">

</style>
