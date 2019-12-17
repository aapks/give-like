<template>
  <view>
    <cu-custom bgcolor="bg-white" :isBack="true">
      <block slot="content">忘记密码</block>
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
        <view class="title">新密码</view>
        <input placeholder="请输入密码" type="password" name="password" />
      </view>
      <view class="cu-form-group">
        <view class="title">确认密码</view>
        <input placeholder="请再次输入密码" type="password" name="confirmpassword" />
      </view>
      <view class="padding">
        <button class="cu-btn block bg-orange margin-tb-sm lg">保存</button>
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
      codeText: "获取验证码"
    };
  }
};
</script>

<style lang="scss">
</style>
