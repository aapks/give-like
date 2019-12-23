<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">注册</block>
    </cu-custom>
    <view class="logo flex justify-center align-center">
      <view
        class="cu-avatar xl round"
        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg);"
      ></view>
    </view>
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
        <input type="number" v-model="telcode" placeholder="输入框带个按钮" name="code" maxlength="6" />
        <button class="cu-btn bg-green shadow" :disabled="disabled" @click="getCode">{{codeText}}</button>
      </view>
      <view class="cu-form-group">
        <view class="title">登录密码</view>
        <input placeholder="请输入密码" type="password" v-model="pwd1" name="password" />
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input placeholder="重新输入密码" type="password" v-model="pwd2" name="confirmpassword" />
      </view>
      <view class="cu-form-group">
        <view class="title">邀请码</view>
        <input placeholder="没有可不填" v-model="code" type="text" />
      </view>
      <view class="cu-form-group">
        <view class="text-xs">
          接收
          <text class="link">《用户协议》</text>
        </view>
        <switch
          class="orange radius"
          @change="SwitchD"
          :class="switchD?'checked':''"
          :checked="switchD?true:false"
        ></switch>
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg" @click="Register">立即注册</button>
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
      switchD: false,
      disabled: false,
      codeText: "获取验证码",
	  tel:"",
	  telcode:"",
	  pwd1:"",
	  pwd2:"",
	  code:""
    };
  },
  methods: {
    SwitchD(e) {
      this.switchD = e.detail.value;
    },
	async Register(){
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
		if(!this.switchD){
			uni.showToast({
			    title: '请先阅读并同意用户协议',
				icon:'none',
			    duration: 2000
			});
			return;
		}
		await this.$api.Register({phone:this.tel,phone_code:this.telcode,password:this.pwd2,invite_code:this.code}).then(res=>{
			if(res.code===1){
				const _this=this;
				uni.showToast({
				    title: '登录成功',
					icon:'success',
				    duration: 2000,
					success:function(){
						uni.setStorage({
						    key: 'userinfo',
						    data:res.data.userProfile,
						    success: function () {
								uni.setStorageSync('token',res.data.token);
						        setTimeout(()=>{
						        	uni.redirectTo({
						        		url: '../index/index'
						        	});
						        },2000)
						    }
						});
						
					}
				});
				
			}
		})
	}
  }
};
</script>

<style lang="scss">
.logo {
  height:280rpx;
}
.link {
  margin: 0 5px;
  color: #0081ff;
}
</style>
