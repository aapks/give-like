<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">提现</block>
		</cu-custom>
		<view class="padding">
			<view class="margin-bottom-sm">
				提现说明：
				
				<view>·   提现手续费3%</view>
				<view>·   提现必须大于100元</view>
				<view>·   提现必须是100的倍数</view>
				<view>·   提现为正常工作日，节假日顺延</view>
				<view>·   提现时间为9：00-18：00</view>
			</view>
		<button class="cu-btn block lg bg-green">立即提现</button>
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

</style>
