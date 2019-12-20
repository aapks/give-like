<template>
	<view>
		<cu-custom bgcolor="bg-white" :isBack="true">
		  <block slot="content">更换手机号</block>
		</cu-custom>
		<form>
		  <view class="cu-form-group">
		    <view class="title">新手机号</view>
		    <input type="number" placeholder="请输入新手机号码" name="phone" maxlength="11" />
		    <view class="cu-capsule radius">
		      <view class="cu-tag bg-blue">+86</view>
		      <view class="cu-tag line-blue">中国大陆</view>
		    </view>
		  </view>
		  <view class="cu-form-group">
		    <view class="title">验证码</view>
		    <input type="number" placeholder="输入框带个按钮" name="code" maxlength="6" />
		    <button class="cu-btn bg-green shadow" :disabled="disabled" @click="getCode">{{codeText}}</button>
		  </view>
		  <view class="padding">
		    <button class="cu-btn block bg-orange margin-tb-sm lg" @click="change">确认更换</button>
		  </view>
		</form>
	</view>
</template>

<script>
	let timer;
	export default {
		data() {
			return {
				disabled: false,
				codeText: "获取验证码"
			};
		},
		methods: {
			getCode() {
			  this.disabled = true;
			  let sec = 3;
			  timer = setInterval(() => {
			    sec--;
			    this.codeText = `${sec}s重新获取`;
			    if (sec < 0) {
			      this.codeText = `重新获取`;
			      this.disabled = false;
			      clearInterval(timer);
			    }
			  }, 1000);
			},
			change() {}
		}
	}
</script>

<style lang="scss">

</style>
