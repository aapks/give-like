<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">修改登录密码</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">原始密码</view>
        <input type="password" v-model="oldpwd" placeholder="请输入原始密码">
      </view>
      <view class="cu-form-group">
        <view class="title">新密码</view>
        <input type="password" v-model="newpwd1" placeholder="请输入新密码">
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input type="password" v-model="newpwd2" placeholder="请输入确认密码">
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
      oldpwd: "",
      newpwd1: "",
      newpwd2: ""
    };
  },
  methods: {
    change() {
      if (this.oldpwd === "") {
        uni.showToast({
          title: "请输入旧密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.newpwd1 === "") {
        uni.showToast({
          title: "请输入新密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.newpwd2 === "") {
        uni.showToast({
          title: "请再次输入新密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.newpwd1 !== this.newpwd2) {
        uni.showToast({
          title: "两次密码输入不一致",
          icon: "none",
          duration: 2000
        });
        return;
	  }
	  this.$api
        .Repwd({
          old_password: this.oldpwd,
          password: this.newpwd1,
          password_confirm: this.newpwd2
        })
        .then(res => {
          if (res.code === 1) {
            const _this = this;
            uni.showToast({
              title: "密码修改成功",
              icon: "success",
              duration: 2000,
              success: function() {
				uni.setStorageSync("token", res.data.new_token);
				setTimeout(() => {
                    uni.redirectTo({
                      url: "../index/index"
                    });
                  }, 2000);
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
