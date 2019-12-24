<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">提现</block>
		</cu-custom>
		<view class="flex justify-center align-center padding">
			<view class="text-center">
				<view class="text-bold text-black text-lg money">￥2568.00</view>
				<view>可提现金额</view>
			</view>
		</view>
		<form>
		<view class="cu-form-group">提现金额</view>
		<view class="cu-form-group text-bold text-lg">
			￥<input placeholder="" type="number" />
		</view>
<radio-group class="block" @change="RadioChange">
			<view class="cu-form-group margin-top">
				<view class="title">提现到微信</view>
				<radio :class="radio=='A'?'checked':''" :checked="radio=='A'?true:false" value="A"></radio>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">提现到支付宝</view>
				<radio :class="radio=='B'?'checked':''" :checked="radio=='B'?true:false" value="B"></radio>
			</view>
			<view class="cu-form-group margin-top">
				<view class="title">提现到银行卡</view>
				<radio :class="radio=='C'?'checked':''" :checked="radio=='C'?true:false" value="C"></radio>
			</view>
		</radio-group>
		<view class="cu-form-group">
        <view class="title">支付密码</view>
        <input placeholder="请输入支付密码" v-model="pwd" type="password" name="password">
      </view>
			<view class="padding">
			<view class="margin-bottom-sm text-sm">
				提现说明：
				
				<view>·   提现手续费3%</view>
				<view>·   提现必须大于100元</view>
				<view>·   提现必须是100的倍数</view>
				<view>·   提现为正常工作日，节假日顺延</view>
				<view>·   提现时间为9：00-18：00</view>
			</view>
		<button class="cu-btn block lg bg-green margin-top-sm">立即提现</button>
		</view>
		</form>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pwd: '',
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
.money {
	font-size: 28px;
}
</style>
