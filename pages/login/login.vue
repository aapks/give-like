<template>
  <view>
    <cu-custom bgcolor="bg-white">
      <block slot="content">登录</block>
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
        <input type="number" v-model="tel" placeholder="请输入手机号码" name="phone" maxlength="11">
        <view class="cu-capsule radius">
          <view class="cu-tag bg-blue">+86</view>
          <view class="cu-tag line-blue">中国大陆</view>
        </view>
      </view>
      <view class="cu-form-group">
        <view class="title">密码</view>
        <input placeholder="请输入密码" v-model="pwd" type="password" name="password">
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg" @click="login">立即登录</button>
      </view>
      <view class="login-bar flex justify-between">
        <button class="cu-btn sm bg-white">
          没有账号？
          <navigator class="primary" hover-class="none" url="/pages/login/register">去注册</navigator>
        </button>
        <button class="cu-btn sm bg-white primary">
          <navigator hover-class="none" url="/pages/login/forget">忘记密码?</navigator>
        </button>
      </view>
    </form>
  </view>
</template>

<script>
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
export default {
  data() {
    return {
      more: "more",
      tel: "",
      pwd: ""
    };
  },
  components: {
    uniLoadMore
  },
  methods: {
    login() {
      if (this.tel === "") {
        uni.showToast({
          title: "请输入手机号",
          icon: "none",
          duration: 2000
        });
        return;
      }
      if (this.pwd === "") {
        uni.showToast({
          title: "请输入密码",
          icon: "none",
          duration: 2000
        });
        return;
      }
      this.$api.Login({ phone: this.tel, password: this.pwd }).then(res => {
        if (res.code === 1) {
          const _this = this;
          uni.showToast({
            title: "登录成功",
            icon: "success",
            duration: 2000,
            success: function() {
              uni.setStorage({
                key: "userinfo",
                data: res.data.userProfile,
                success: function() {
                  uni.setStorageSync("token", res.data.token);
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
      });
    }
  },
  onPullDownRefresh() {
    console.log("refresh");
    setTimeout(function() {
      uni.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom() {
    console.log("到底了");
    this.more = "loading";
  }
};
</script>

<style lang="scss" scoped>
.logo {
  height: 400rpx;
}
.primary {
  color: $primary;
}
.login-bar {
  margin-bottom: 20rpx;
}
</style>
