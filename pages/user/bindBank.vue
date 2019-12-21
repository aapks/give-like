<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">绑定银行卡</block>
		</cu-custom>
		<form>
			<view class="cu-form-group margin-top">
			  <view class="title">选择银行</view>
			  <picker @change="PickerChange" :value="index" :range="picker">
			    <view class="picker">{{ picker[index] }}</view>
			  </picker>
			</view>
			<view class="cu-form-group">
			  <view class="title">持卡人</view>
			  <input type="text" placeholder="" />
			</view>
		  <view class="cu-form-group">
		    <view class="title">银行卡号</view>
		    <input type="number" placeholder="请输入银行卡号" />
		  </view>
			<view class="cu-form-group">
			  <view class="title">预留手机号</view>
			  <input type="number" placeholder="请输入手机号码" name="phone" maxlength="11" />
			</view>
		  <view class="padding">
		    <button class="cu-btn block bg-orange margin-tb-sm lg" @click="save">保存</button>
		  </view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				 picker: ["交通", "民生", "建设", "农业"]
			};
		},
		methods: {
			save() {}
		}
	}
</script>

<style lang="scss">

</style>
