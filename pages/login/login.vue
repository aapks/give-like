<template>
  <view>
    <!-- bgImage="https://image.weilanwl.com/color2.0/plugin/wdh2236.jpg" -->
    <cu-custom bgcolor="bg-white">
      <block slot="content">登录</block>
    </cu-custom>
    <form>
      <view class="cu-form-group">
        <view class="title">账号</view>
        <input type="number" placeholder="请输入手机号码" name="phone" maxlength="11" />
        <view class="cu-capsule radius">
          <view class="cu-tag bg-blue">+86</view>
          <view class="cu-tag line-blue">中国大陆</view>
        </view>
      </view>
      <view class="cu-form-group">
        <view class="title">密码</view>
        <input placeholder="请输入密码" type="password" name="password" />
      </view>
      <view class="cu-form-group">
        <view class="title">验证码</view>
        <input type="number" placeholder="输入框带个按钮" name="code" maxlength="6" />
        <button class="cu-btn bg-green shadow" :disabled="disabled" @click="getCode">{{codeText}}</button>
      </view>
      <view class="padding">
        <view class="flex">
          <button class="cu-btn sm bg-white mauve">
            <navigator hover-class="none" url="/pages/login/register">去注册</navigator>
          </button>
          <button class="cu-btn sm bg-white mauve">
            <navigator hover-class="none" url="/pages/login/forget">忘记密码?</navigator>
          </button>
        </view>
        <button class="cu-btn block bg-mauve margin-tb-sm lg">立即登录</button>
      </view>
    </form>
    <!-- <view v-for="item in arr" :key="item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci incidunt nam sit officiis magnam odio quos provident aliquam impedit. Vitae corrupti voluptas laboriosam numquam, cumque vel quo sit quam nisi?</view>
    <uni-load-more :status="more"></uni-load-more>-->
  </view>
</template>

<script>
import uniLoadMore from "@/components/uni-load-more/uni-load-more.vue";
let timer;
export default {
  data() {
    return {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      disabled: false,
      codeText: "获取验证码",
      more: "more"
    };
  },
  components: {
    uniLoadMore
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
.mauve {
  color: $mauve;
}
.flex {
  margin-bottom: 20rpx;
  justify-content: space-between;
}
</style>
