<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">绑定支付宝</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
			  <view class="title">支付宝账号</view>
			  <input type="text" placeholder="请输入支付宝账号" />
			</view>
		  <view class="cu-form-group">
		    <view class="title">账号名称</view>
		    <input type="text" placeholder="请输入账号名称" />
		  </view>
			<view class="cu-form-group">
			  <view class="title">手机号</view>
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
				
			};
		}
	}
</script>

<style lang="scss">

</style>
