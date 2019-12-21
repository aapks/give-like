<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">绑定提现账号</block>
		</cu-custom>
		<view class="cu-list menu text-left solid-top">
			<view class="cu-item arrow">
				<navigator url="/pages/user/bindWx">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">绑定微信提现账号</text>
					</view>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator url="/pages/user/bindAliPay">
				<view class="content">
					<text class="cuIcon-circlefill text-grey"></text>
					<text class="text-grey">绑定支付宝提现账号</text>
				</view>
				</navigator>
			</view>
			<view class="cu-item arrow">
				<navigator url="/pages/user/bindBank">
					<view class="content">
						<text class="cuIcon-circlefill text-grey"></text>
						<text class="text-grey">绑定提现银行卡号</text>
					</view>
				</navigator>
			</view>
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
