<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">充值</block>
		</cu-custom>
		<form action=""></form>

		<view class="cu-form-group">充值金额</view>
		<view class="cu-form-group text-bold text-lg">
			￥<input placeholder="" type="number" />
		</view>

		<view class="grid col-4 padding text-center">
			<view>
				<button class="cu-btn bg-orange">100 元 </button>
			</view>
			<view>

				<button class="cu-btn">200 元 </button>
			</view>
			<view>

				<button class="cu-btn">300 元 </button>
			</view>
			<view>
				<button class="cu-btn">500 元 </button>

			</view>
			<view class="margin-top-sm">
				<button class="cu-btn">800 元</button>

			</view>
			<view class="margin-top-sm">

				<button class="cu-btn">1000元</button>
			</view>
			<view class="margin-top-sm">
				<button class="cu-btn">2000元</button>

			</view>
			<view class="margin-top-sm">
				<button class="cu-btn">3000元</button>

			</view>

		</view>
		<radio-group class="block" @change="RadioChange">
			<view class="cu-form-group">支付方式</view>
			<view class="cu-form-group margin-top">
				<view class="title">微信支付</view>
				<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">支付宝支付</view>
				<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
			</view>
		</radio-group>
		<view class="padding">

			<button class="cu-btn bg-orange block lg">充值</button>
		</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radio: ''
			};
		},
		methods: {
			RadioChange(e) {
				this.radio = e.detail.value
			}
		}
	}
</script>

<style lang="scss">

</style>
