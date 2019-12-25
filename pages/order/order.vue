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
		
		<view class="order-list">
			<view class="order-list-item">
				<view class="order-list-item-head flex justify-between">
					<navigator url="">商户名称商户名称<text class="cuIcon-right"></text></navigator>
					<text class="text-gray">待付款/待发货/交易完成</text>
				</view>
				<view class="margin-top-sm">
					<view class="flex justify-start">
						<view class="cu-avatar radius lg margin-right-sm"><image src="https://flutterchina.club/get-started/codelab/images/step2-screenshot.png" mode=""></image></view>
						<view>
							<view class="text-black">产品名称产品名称产品名称</view>
							<view class="text-gray text-sm margin-top-xs">产品名称产品名称产品名称</view>
							<view><text class="text-xl text-black text-bold margin-right-sm">￥120</text>x1</view>
						</view>
					</view>
					<view class="actions text-right margin-top-sm">
						<button class="cu-btn line-grey round">取消订单</button>
						<button class="cu-btn bg-orange round margin-left-lg">取消订单</button>
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
.order-list{
	&-item {
		padding: 30rpx;
		border-bottom: 20rpx solid rgb(245,245,245);
		&:last-child {
			border-bottom: none;
		}
		&-head {
			padding-bottom: 20rpx;
			border-bottom: 1px dashed #ddd;
		}
	}
}
.cu-avatar {
	flex: 0 0 120rpx;
	width: 120rpx;
	height: 120rpx;
}
</style>
