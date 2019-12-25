<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">会员权益</block>
		</cu-custom>
		<view class="padding-lg">
			<view class="card bg-orange radius padding-lg">
				<view class="margin-top-sm">
					<view class="flex align-center justify-start">
						<image class="vip margin-right-sm" src="../../static/vip@2x.png"></image>尊享会员
					</view>
					<view>升级需要￥698/六个月</view>
					<view>300任务/天</view>
				</view>
			</view>
		</view>
		<view class="account-list">
			<view class="account-list-item">消费指定产品,升级成VIP会员,即可享受以下权益</view>
			<view class="account-list-item">12123123</view>
			<view class="account-list-item">12123123</view>
			<view class="account-list-item">12123123</view>
			<view class="account-list-item">12123123</view>
			<view class="account-list-item">12123123</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.account-list {
	&-item {
		padding: 30rpx;
		border-bottom: 1rpx solid #eee;
	}
}
.card {
	height: 300rpx;
}
.vip {
  width: 60rpx;
  height: 30rpx;
}
</style>
