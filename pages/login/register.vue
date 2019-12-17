<template>
  <view>
    <cu-custom bgcolor="bg-white">
      <block slot="content">注册</block>
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
        <view class="title">验证码</view>
        <input type="number" placeholder="输入框带个按钮" name="code" maxlength="6" />
        <button class="cu-btn bg-green shadow" :disabled="disabled" @click="getCode">{{codeText}}</button>
      </view>
      <view class="cu-form-group">
        <view class="title">姓名</view>
        <input type="text" placeholder="请输入姓名" />
      </view>
      <view class="cu-form-group">
        <view class="title">登录密码</view>
        <input placeholder="请输入密码" type="password" name="password" />
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input placeholder="重新输入密码" type="password" name="confirmpassword" />
      </view>
      <view class="cu-form-group">
        <view class="title">邀请码</view>
        <input placeholder="没有可不填" type="text" />
      </view>
      <view class="cu-form-group">
        <view class="title text-xs">
          同意
          <text class="link">注册合约规则</text>
        </view>
        <switch
          class="orange radius"
          @change="SwitchD"
          :class="switchD?'checked':''"
          :checked="switchD?true:false"
        ></switch>
      </view>
      <view class="padding">
        <button class="cu-btn block bg-mauve margin-tb-sm lg">立即注册</button>
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
      codeText: "获取验证码"
    };
  },
  methods: {
    SwitchD(e) {
      this.switchD = e.detail.value;
    }
  }
};
</script>

<style lang="scss">
.link {
  margin: 0 5px;
  color: #0081ff;
}
.text-xs {
  font-size: 12px;
}
</style>
