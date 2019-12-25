<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">我的订单</block>
		</cu-custom>
		<scroll-view scroll-x class="bg-white nav" scroll-with-animation :scroll-left="scrollLeft">
			<view class="cu-item" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in navArr" :key="item.id" @tap="tabSelect"
			 :data-id="index">
				{{item.title}}
			</view>
		</scroll-view>
		
		<view class="order-list padding">
			<view class="order-list-item">
				<view class="order-list-item-head">商户名称商户名称<text class="cuIcon-right"></text></view>
				<view>
					
					<view class="text-right">
						<button class="cu-btn line-grey round">取消订单</button>
						<button class="cu-btn bg-orange round">取消订单</button>
					</view>
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
					title: '待付款'
				}, {
					id: 3,
					title: '待发货'
				}, {
					id: 4,
					title: '待收货'
				}, {
					id: 5,
					title: '待评价'
				}, {
					id: 6,
					title: '退货'
				}],
				TabCur: 0,
				scrollLeft: 0
			};
		},
		onLoad(options) {
			let {status } = options
			if(status) {
				this.TabCur = status
			}
			
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
