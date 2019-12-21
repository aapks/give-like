<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">绑定微信</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
			  <view class="title">微信账号</view>
			  <input type="text" placeholder="请输入微信名称" />
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
		},
		methods: {
			save() {}
		}
	}
</script>

<style lang="scss">

</style>
