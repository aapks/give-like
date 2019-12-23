<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">设置支付密码</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">手机号</view>
        <input type="number" v-model="tel" placeholder="请输入手机号码" name="phone" maxlength="11">
        <view class="cu-capsule radius">
          <view class="cu-tag bg-blue">+86</view>
          <view class="cu-tag line-blue">中国大陆</view>
        </view>
      </view>
      <view class="cu-form-group">
        <view class="title">验证码</view>
        <input type="number" v-model="telcode" placeholder="输入框带个按钮" name="code" maxlength="6">
        <button class="cu-btn bg-green shadow" :disabled="disabled" @click="getCode">{{codeText}}</button>
      </view>
      <view class="cu-form-group">
        <view class="title">支付密码</view>
        <input type="password" v-model="pwd1" placeholder="请输入支付密码">
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input type="password" v-model="pwd2" placeholder="请输入确认密码">
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg" @click="change">提交</button>
      </view>
    </form>
  </view>
</template>

<script>
let timer;
import mixin from "../login/mixin.js";
export default {
  mixins: [mixin],
  data() {
    return {
      disabled: false,
      codeText: "获取验证码",
      telcode: "",
      tel: "",
      pwd1: "",
      pwd2: ""
    };
  },
  methods: {
    // getCode() {
    //   this.disabled = true;
    //   let sec = 3;
    //   timer = setInterval(() => {
    //     sec--;
    //     this.codeText = `${sec}s重新获取`;
    //     if (sec < 0) {
    //       this.codeText = `重新获取`;
    //       this.disabled = false;
    //       clearInterval(timer);
    //     }
    //   }, 1000);
    // },

    async change() {
      if (this.tel === "") {
        uni.showToast({
          title: "请输入手机号",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.telcode === "") {
        uni.showToast({
          title: "请输入验证码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.pwd1 === "") {
        uni.showToast({
          title: "请输入密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.pwd2 === "") {
        uni.showToast({
          title: "请再次输入密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.pwd1 !== this.pwd2) {
        uni.showToast({
          title: "两次密码输入不一致",
          icon: "none",
          duration: 2000
        });
        return;
      }
      await this.$api
        .Setpaypwd({
          phone_code: this.telcode,
          password: this.pwd1,
          password_confirm: this.pwd1
        })
        .then(res => {
          if (res.code === 1) {
            const _this = this;
            uni.showToast({
              title: "登录成功",
              icon: "success",
              duration: 2000,
              success: function() {
                // uni.setStorage({
                //   key: "userinfo",
                //   data: res.data.userProfile,
                //   success: function() {
                //     uni.setStorageSync("token", res.data.token);
                //     setTimeout(() => {
                //       uni.redirectTo({
                //         url: "../index/index"
                //       });
                //     }, 2000);
                //   }
                // });
              }
            });
          }
        });
    }
  }
};
</script>

<style lang="scss">
</style>
