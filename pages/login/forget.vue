<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">忘记密码</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">账号</view>
        <input type="number" placeholder="请输入手机号码" v-model="tel" name="phone" maxlength="11" />
        <view class="cu-capsule radius">
          <view class="cu-tag bg-blue">+86</view>
          <view class="cu-tag line-blue">中国大陆</view>
        </view>
      </view>
      <view class="cu-form-group">
        <view class="title">验证码</view>
        <input type="number" placeholder="输入框带个按钮" name="code" v-model="telcode" maxlength="6" />
        <button class="cu-btn bg-green shadow" :disabled="disabled" @click="getCode">{{codeText}}</button>
      </view>
      <view class="cu-form-group">
        <view class="title">新密码</view>
        <input placeholder="请输入密码" type="password" v-model="pwd1" name="password" />
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input placeholder="请再次输入密码" type="password" v-model="pwd2" name="confirmpassword" />
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg" @click="save()">保存</button>
      </view>
    </form>
  </view>
</template>

<script>
import mixin from "./mixin.js";
export default {
  mixins: [mixin],
  data() {
    return {
      disabled: false,
      codeText: "获取验证码",
	  tel:"",
	  telcode:"",
	  pwd1:"",
	  pwd2:""
    };
  },
  methods:{
	  async save(){
		  if(this.tel===""){
		  	uni.showToast({
		  	    title: '请输入手机号',
		  		icon:'none',
		  	    duration: 2000
		  	});
		  	return;
		  }
		  if(this.telcode===""){
		  	uni.showToast({
		  	    title: '请输入验证码',
		  		icon:'none',
		  	    duration: 2000
		  	});
		  	return;
		  }
		  if(this.pwd1===""){
		  	uni.showToast({
		  	    title: '请输入密码',
		  		icon:'none',
		  	    duration: 2000
		  	});
		  	return;
		  }
		  if(this.pwd2===""){
		  	uni.showToast({
		  	    title: '请再次输入密码',
		  		icon:'none',
		  	    duration: 2000
		  	});
		  	return;
		  }
		  if(this.pwd1!==this.pwd2){
		  	uni.showToast({
		  	    title: '两次密码输入不一致',
		  		icon:'none',
		  	    duration: 2000
		  	});
		  	return;
		  }
			this.$api.Forget({phone:this.tel,phone_code:this.telcode,password:this.pwd1,password_confirm:this.pwd2}).then(res=>{
				if(res.code===1){
				  uni.showToast({
					title: '修改成功',
					icon:'success',
					duration: 2000,
					success: function () {
						setTimeout(()=>{
							uni.redirectTo({
								url: './login'
							});
						},2000)
					}
				  });
				}
			})
		}
	}
};
</script>

<style lang="scss">
</style>
