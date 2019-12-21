<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">余额</block>
			<block slot="right">
				<navigator url="/pages/user/detail">
				<view class="margin-right-sm">
				明细	
				</view>
				</navigator>
				</block>
		</cu-custom>
		<view class="flex justify-center align-center flex-direction main">
			<view class="text-grey margin-bottom-sm">我的余额</view>
			<view class="text-bold text-xxl">￥2568.00</view>
		</view>
		<view class="padding">
			<button class="cu-btn block lg bg-orange margin-bottom-sm">充值</button>
			<button class="cu-btn block lg bg-green">提现</button>
			<navigator class="bind text-center margin-top-xl" url="/pages/user/bind">绑定提现账号</navigator>
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
.main {
	height: 400rpx;
}
.bind {
	text-decoration: underline;
}
</style>
