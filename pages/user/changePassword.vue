<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
			<block slot="content">修改登录密码</block>
		</cu-custom>
		<form>
			<view class="cu-form-group">
				<view class="title">原始密码</view>
				<input type="password" placeholder="请输入原始密码" />
			</view>
			<view class="cu-form-group">
				<view class="title">新密码</view>
				<input type="password" placeholder="请输入新密码" />
			</view>
			<view class="cu-form-group">
				<view class="title">确认密码</view>
				<input type="password" placeholder="请输入确认密码" />
			</view>
			<view class="padding">
				<button class="cu-btn block bg-orange margin-tb-sm lg" @click="change">提交</button>
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
			change() {}
		}
	}
</script>

<style lang="scss">

</style>
